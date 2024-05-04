using DAL.Models;

namespace DAL.DTO;

public class BaseItem
{
    public int Id { get; set; }
    public string Name { get; set; }

    public BaseItem()
    {
    }

    public BaseItem(User user)
    {
        Id = user.Id;
        Name = user.Name;
    }
}