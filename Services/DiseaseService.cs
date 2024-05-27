using DAL.DTO;
using DAL.Models;
using DAL.Repositories;

namespace Services
{
    public interface IDiseaseService
    {
        int CreateDiseaseRecord(DiseaseRecordModel diseaseRecordModel);
        List<DiseaseRecord> GetDiseaseRecords(DiseaseFilterDTO diseaseFilterDTO);

        DiseaseRecord GetDiseaseRecord(int id);

        int PatchDiseaseRecord(DiseaseRecordModel record);
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

        public List<DiseaseRecord> GetDiseaseRecords(DiseaseFilterDTO diseaseFilterDTO)
        {
            return diseaseRepository.GetDiseaseRecords(diseaseFilterDTO);
        }

        public DiseaseRecord GetDiseaseRecord(int id) => diseaseRepository.GetDisease(id);

        public int PatchDiseaseRecord(DiseaseRecordModel record)
        {
            var origin = GetDiseaseRecord(record.Id);

            if (origin is null) return 0;

            origin.DoctorId = record.DoctorId;
            origin.PatientId = record.PatientId;
            origin.Anamnesis = record.Anamnesis;
            origin.Treatment = record.Treatment;
            origin.Symptoms = record.Symptoms;

            diseaseRepository.Update(origin);

            return origin.Id;
        }
    }
}