using Microsoft.AspNetCore.Mvc;
using imageUploader.API.Services;
using imageUploader.API.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Cors;

namespace imageUploader.API.Controllers;

[ApiController]
[Route("[controller]")]
[EnableCors("AllowAllOrigins")]
public class UploadFileController : ControllerBase
{
    private readonly IUploadFileService _uploadFileService;
    private readonly IHubContext<ProgressHub> _hubContext;

    public UploadFileController(IUploadFileService uploadFileService, IHubContext<ProgressHub> hubContext)
    {
        _uploadFileService = uploadFileService;
        _hubContext = hubContext;
    }

    [HttpPost]
    public async Task<IActionResult> UploadFileAsync(IFormFile file)
    {
        var result = await _uploadFileService.UploadFileAsync(file);


        return Ok(result);
    }
}