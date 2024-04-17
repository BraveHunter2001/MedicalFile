using DAL.DTO;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PatientsController(IPatientService patientService) : ControllerBase
{
    [HttpPost]
    public IActionResult CreatePatient([FromBody] CreatePatientDto model)
    {
        if (string.IsNullOrEmpty(model.Name)) return BadRequest("Name is't null or empty");
        if (model.Age <= 0) return BadRequest("Age must be positive.");

        var patient = new Patient { Age = model.Age, Name = model.Name, RiskFactor = model.RiskFactor };
        return Ok(patientService.CreatePatient(patient));
    }
}