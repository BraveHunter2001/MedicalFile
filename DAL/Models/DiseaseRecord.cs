namespace DAL.Models;

public class DiseaseRecord
{
    public int Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public string Symptoms { get; set; }
    public string Anamnesis { get; set; }
    public string Treatment { get; set; }

    public int PatientId { get; set; }
    public User Patient { get; set; }

    public int DoctorId { get; set; }
    public User Doctor { get; set; }
}
