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

    [HttpGet("patients")]
    public IActionResult GetPatients()
    {
        var res = context.Patients
            .Include(p=>p.Diseases)
            .Select(p=> new
        {
                Name = p.Name,
                Age = p.Age,
                Risk = p.RiskFactor,
                Diseases = p.Diseases.Select(d => new {d.Treatment}).ToList()
                
               
        })
            .ToList();
        return  Ok(res);
    }

}
