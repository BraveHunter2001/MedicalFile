using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime CreatedDate { get; set; }
    public string Login { get; set; }
    public string Password { get; set; }

    [Column(TypeName = "text")]
    public Role Role { get; set; }

    public List<DiseaseRecord> DiseaseRecords { get; set; }
    public PatientCharacteristic PatientCharacteristic { get; set; }
}

public enum Role
{
    Admin,
    Patient,
    Doctor,
}