from servers import start_servers, start_servers_with_debug
from taskbar_icon import TaskBarIcon
import wx

class App(wx.App):
    def OnInit(self):
        start_servers()
        TaskBarIcon()
        return True

if __name__ == '__main__':
    app = App(False)
    app.MainLoop()
    # start_servers_with_debug()



