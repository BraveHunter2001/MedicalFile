using DAL.Models;

namespace DAL.DTO;

public class DiseaseRecordDTO
{
    public DateTime CreateDate { get; set; }
    public string DoctorName { get; set; }
    public string PatientName { get; set; }
    public string Symptoms { get; set; }
    public string Anamnesis { get; set; }
    public string Treatment { get; set; }

    public DiseaseRecordDTO(DiseaseRecord diseaseRecord) 
    {
        CreateDate = diseaseRecord.CreatedDate;
        DoctorName = diseaseRecord.Doctor.Name;
        PatientName = diseaseRecord.Patient.Name;
        Symptoms = diseaseRecord.Symptoms;
        Anamnesis = diseaseRecord.Anamnesis;
        Treatment = diseaseRecord.Treatment;
    }
}
