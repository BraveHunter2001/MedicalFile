using DAL.DTO;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PatientsController(IPatientService patientService) : ControllerBase
{
    [HttpPost]
    public IActionResult CreatePatient([FromBody] PatientDto patient)
    {
        if (string.IsNullOrWhiteSpace(patient?.Login)) return BadRequest("Empty login");
        if (string.IsNullOrWhiteSpace(patient.Password)) return BadRequest("Empty password");
        if (string.IsNullOrWhiteSpace(patient.Name)) return BadRequest("Empty Name");
        if (string.IsNullOrWhiteSpace(patient.Name)) return BadRequest("Empty Name");
        if (patient.Age <= 0) return BadRequest("Age must by non negative");

        int patientId = patientService.CreatePatient(patient);

        return Ok(patientId);
    }
}
