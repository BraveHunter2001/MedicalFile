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
        if (!userService.UserExist(diseaseRecordModel.PatientId, Role.Patient))
            return BadRequest("Patient with this id don't exist");
        if (!userService.UserExist(diseaseRecordModel.DoctorId, Role.Doctor))
            return BadRequest("Doctor with this id don't exist");

        int diseaseId = diseaseService.CreateDiseaseRecord(diseaseRecordModel);
        return Ok(diseaseId);
    }

    [HttpGet]
    public IActionResult GetDiseaseRecords([FromQuery] DiseaseFilterDTO diseaseFilterDTO)
    {
        List<DiseaseRecordDTO> diseaseRecords = diseaseService.GetDiseaseRecords(diseaseFilterDTO).ConvertAll(d => new DiseaseRecordDTO(d));

        return Ok(diseaseRecords);
    }

    [HttpGet("{id}")]
    public IActionResult GetDisease([FromRoute] int? id)
    {
        if (id is null or 0) return BadRequest();

        var disease = diseaseService.GetDiseaseRecord(id.Value);
        return disease is null ? NotFound() : Ok(new DiseaseRecordDTO(disease));
    }

    [HttpPatch]
    public IActionResult PatchDisease([FromBody] DiseaseRecordModel diseaseRecordModel)
    {
        if (!userService.UserExist(diseaseRecordModel.PatientId, Role.Patient))
            return BadRequest("Patient with this id don't exist");
        if (!userService.UserExist(diseaseRecordModel.DoctorId, Role.Doctor))
            return BadRequest("Doctor with this id don't exist");

        int id = diseaseService.PatchDiseaseRecord(diseaseRecordModel);
        return id is 0 ? BadRequest() : Ok();
    }
}