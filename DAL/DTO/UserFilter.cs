using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTO
{
    public class UserFilter
    {
        public Role? Role {  get; set; }
        public string Name { get; set; }
        public int? Take { get; set; }
    }
}
