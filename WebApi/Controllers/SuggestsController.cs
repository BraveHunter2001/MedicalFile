using DAL.DTO;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SuggestsController(IUserService userService) : ControllerBase
{
    [HttpGet("users")]
    public IActionResult GetDoctor([FromQuery] string query, [FromQuery] Role role) =>
        Ok(userService.GetUsers(new UserFilter() { Name = query, Role = role }).Select(user => new BaseItem(user)).ToList());
}