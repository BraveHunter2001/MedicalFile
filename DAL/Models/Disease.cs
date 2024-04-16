namespace DAL.Models;

public class Disease
{
    public int Id { get; set; }
    public string Symptoms { get; set; }
    public string Anamnesis { get; set; }
    public string Treatment { get; set; }
    public int Pathophysiology { get;}

    public int PatientId { get; set; }
    public Patient Patient { get; set; }
}
