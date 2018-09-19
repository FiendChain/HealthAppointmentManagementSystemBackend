import webbrowser
import wx, wx.adv
from servers import frontend_config

TRAY_ICON = "resources/tray.png"
TRAY_TOOLTIP = "Healthcare Appointment Management System"

class TaskBarIcon(wx.adv.TaskBarIcon):
    def __init__(self):
        super().__init__()
        self.SetIcon(wx.Icon(TRAY_ICON), TRAY_TOOLTIP)
        self.Bind(wx.adv.EVT_TASKBAR_LEFT_DCLICK, self.open_browser)

    def CreateMenuItem(self, menu, label, func, icon=None):
        item = wx.MenuItem(menu, -1, label)
        if icon:
            item.SetBitmap(wx.Bitmap(icon))
        menu.Bind(wx.EVT_MENU, func, id=item.GetId())
        menu.Append(item)
        return item

    def CreatePopupMenu(self):
        menu = wx.Menu()
        self.CreateMenuItem(menu, 'Open', self.open_browser)
        self.CreateMenuItem(menu, 'Exit', self.exit)
        return menu

    def open_browser(self, event):
        webbrowser.open('http://{}:{}'.format(
            frontend_config.get('host'),
            frontend_config.get('port'),
        ))

    def exit(self, event):
        print('Shutting down servers')
        wx.CallAfter(self.Destroy)