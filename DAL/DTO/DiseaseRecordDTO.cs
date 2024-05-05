using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTO
{
    public class DiseaseRecordDTO
    {
        public DateTime CreateDate { get; set; }
        public string DoctorName { get; set; }
        public string PatientName { get; set; }
        public string Symptoms { get; set; }
        public string Anamnesis { get; set; }
        public string Treatment { get; set; }
    }
}
