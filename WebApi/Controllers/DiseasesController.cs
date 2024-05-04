using DAL.DTO;
using Microsoft.AspNetCore.Mvc;
using Services;
using DAL.Models;

namespace WebApi.Controllers;

[Route("/api/[controller]")]
[ApiController]
public class DiseasesController(IDiseaseService diseaseService, IUserService userService) : ControllerBase
{
    [HttpPost]
    public IActionResult CreateDiseaseRecord([FromBody] DiseaseRecordModel diseaseRecordModel)
    {
        if (userService.UserExist(diseaseRecordModel.PatientId, Role.Patient))
        {
            if (userService.UserExist(diseaseRecordModel.DoctorId, Role.Doctor))
            {
                int diseaseId = diseaseService.CreateDiseaseRecord(diseaseRecordModel);
                return Ok(diseaseId);
            }
            return BadRequest("Doctor with this id don't exist");
        }
        return BadRequest("Patient with this id don't exist");
    }
}
