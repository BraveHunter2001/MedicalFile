using DAL.Models;

namespace DAL.DTO;

public class DiseaseRecordDTO
{
    public int Id { get; set; }
    public string CreateDate { get; set; }
    public string DoctorName { get; set; }
    public int DoctorId { get; set; }
    public string PatientName { get; set; }

    public int PatientId { get; set; }
    public string Symptoms { get; set; }
    public string Anamnesis { get; set; }
    public string Treatment { get; set; }

    public DiseaseRecordDTO(DiseaseRecord diseaseRecord)
    {
        Id = diseaseRecord.Id;
        CreateDate = diseaseRecord.CreatedDate.ToString("dd.MM.yyyy HH:mm");
        DoctorName = diseaseRecord.Doctor.Name;
        DoctorId = diseaseRecord.DoctorId;
        PatientId = diseaseRecord.PatientId;
        PatientName = diseaseRecord.Patient.Name;
        Symptoms = diseaseRecord.Symptoms;
        Anamnesis = diseaseRecord.Anamnesis;
        Treatment = diseaseRecord.Treatment;
    }
}