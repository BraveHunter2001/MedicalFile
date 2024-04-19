namespace DAL.Models;

public class PatientCharacteristic
{
    public int Id { get; set; }
    public int PatientId { get; set; }
    public User Patient { get; set; }
    public int Age { get; set; }
    public string RiskFactor { get; set; }
}
