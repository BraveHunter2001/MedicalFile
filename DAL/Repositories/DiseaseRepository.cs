using DAL.DTO;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public interface IDiseaseRepository
    {
        int Add(DiseaseRecord disease);
        List<DiseaseRecord> GetDiseaseRecords(DiseaseFilterDTO diseaseFilterDTO);
    }
    public class DiseaseRepository(MedicalFileContext context) : Repository<DiseaseRecord>(context), IDiseaseRepository
    {
        public int Add(DiseaseRecord diseaseRecord)
        {
            Create(diseaseRecord);
            return diseaseRecord.Id;
        }

        public List<DiseaseRecord> GetDiseaseRecords(DiseaseFilterDTO diseaseFilterDTO)
        {
            var allDiseaseRecord = context.DiseaseRecords.Where(disease
                => (diseaseFilterDTO == null
                || ((diseaseFilterDTO.PatientId == null
                || disease.PatientId == diseaseFilterDTO.PatientId)
                && (diseaseFilterDTO.DoctorId == null
                || disease.DoctorId == diseaseFilterDTO.DoctorId)))).Include(d => d.Patient).Include(d => d.Doctor);

            var resultWithTake =
                diseaseFilterDTO?.Take is not null
                ? allDiseaseRecord.Take(diseaseFilterDTO.Take.Value)
                : allDiseaseRecord;


            return resultWithTake.ToList();
        }
    }
}
