using DAL.DTO;
using DAL.Models;
using DAL.Repositories;

namespace Services
{
    public interface IDiseaseService
    {
        int CreateDiseaseRecord(DiseaseRecordModel diseaseRecordModel);
    }
    public class DiseaseService(IDiseaseRepository diseaseRepository) : IDiseaseService
    {
        public int CreateDiseaseRecord(DiseaseRecordModel diseaseRecordModel)
        {
            var diseaseRecord = new DiseaseRecord
            {
                CreatedDate = DateTime.Now,
                DoctorId = diseaseRecordModel.DoctorId,
                PatientId = diseaseRecordModel.PatientId,
                Symptoms = diseaseRecordModel.Symptoms,
                Anamnesis = diseaseRecordModel.Anamnesis,
                Treatment = diseaseRecordModel.Treatment,
            };

            int diseaseId = diseaseRepository.Add(diseaseRecord);
            return diseaseId;
        }
    }
}
