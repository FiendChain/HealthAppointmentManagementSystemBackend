from servers import start_servers, start_servers_with_debug
from taskbar_icon import TaskBarIcon
import wx

class App(wx.App):
    def OnInit(self):
        TaskBarIcon()
        start_servers()
        return True

if __name__ == '__main__':
    # app = App(False)
    # app.MainLoop()
    start_servers_with_debug()



