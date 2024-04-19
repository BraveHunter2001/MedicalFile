using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TestController(MedicalFileContext context) : ControllerBase
{
    [HttpGet]
    public IActionResult GetHelloWord() => Ok("Hello world");
}