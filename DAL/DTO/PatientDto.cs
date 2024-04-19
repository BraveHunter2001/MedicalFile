namespace DAL.DTO;

public class PatientDto
{
    public int? UserId { get; set; }
    public string Name { get; set; }
    public DateTime? CreatedDate { get; set; }
    public string Login { get; set; }
    public string Password { get; set; }
    public int Age { get; set; }
    public string RiskFactor { get; set; }
}