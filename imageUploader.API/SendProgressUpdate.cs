using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace imageUploader.API.Hubs;

public class ProgressHub : Hub
{
    public async Task SendProgressUpdate(string message)
    {
        await Clients.All.SendAsync("ReceiveProgressUpdate", message);
    }
}
