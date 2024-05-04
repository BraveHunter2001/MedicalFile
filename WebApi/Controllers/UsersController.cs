using DAL.DTO;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController(IUserService userService) : ControllerBase
{

    [HttpPost("patients")]
    public IActionResult CreatePatient([FromBody] PatientModel patient)
    {
        if (string.IsNullOrWhiteSpace(patient?.Login)) return BadRequest("Empty login");
        if (string.IsNullOrWhiteSpace(patient.Password)) return BadRequest("Empty password");
        if (string.IsNullOrWhiteSpace(patient.Name)) return BadRequest("Empty Name");
        if (patient.Age <= 0) return BadRequest("Age must by non negative");

        int patientId = userService.CreatePatient(patient);

        return Ok(patientId);
    }

    [HttpPost("doctors")]
    public IActionResult CreateDoctors([FromBody] UserModel doctor)
    {
        if (string.IsNullOrWhiteSpace(doctor?.Login)) return BadRequest("Empty login");
        if (string.IsNullOrWhiteSpace(doctor.Password)) return BadRequest("Empty password");
        if (string.IsNullOrWhiteSpace(doctor.Name)) return BadRequest("Empty Name");

        int patientId = userService.CreateDoctor(doctor);

        return Ok(patientId);
    }

    [HttpGet]
    public IActionResult GetUsers()
    {
        //todo: Ебни вывод по Take
        List<User> allUsers = userService.GetUsers();
        return Ok(allUsers);
    }

    [HttpGet("doctors")]
    public IActionResult GetDoctors([FromBody] UserFilter userFilter)
    {
        userFilter.Role = Role.Doctor;
        List<User> doctors = userService.GetUsers(userFilter);
        return Ok(doctors);
    }

    [HttpGet("patients")]
    public IActionResult GetPatients([FromBody] UserFilter userFilter)
    {
        userFilter.Role = Role.Patient;
        List<User> patients = userService.GetUsers(userFilter);
        return Ok(patients);
    }
}
