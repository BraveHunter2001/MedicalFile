using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTO
{
    public class DiseaseRecordModel
    {
        public int DoctorId { get; set; }
        public int PatientId { get; set; }
        public string Symptoms { get; set; }
        public string Anamnesis { get; set; }
        public string Treatment { get; set; }
    }
}
