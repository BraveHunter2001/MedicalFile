using DAL;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TestController(MedicalFileContext context) : ControllerBase
{
    [HttpGet]
    public IActionResult GetHelloWord() => Ok("Hello world");

    [HttpGet("suggests")]
    public IActionResult GetSuggests([FromQuery] string query)
    {
        var data = new[]
        {
            new
            {
                name = "Ulysses Mann",
                age = 62,
                riskFactor = "consequat nec, mollis vitae, posuere at, velit."
            },
            new
            {
                name = "Dai Chen",
                age = 29,
                riskFactor = "varius ultrices, mauris ipsum porta elit,"
            },
            new
            {
                name = "Keely Kemp",
                age = 86,
                riskFactor = "eleifend. Cras sed leo. Cras vehicula aliquet libero."
            },
            new
            {
                name = "Darius Fuentes",
                age = 44,
                riskFactor = "tincidunt orci quis lectus. Nullam"
            },
            new
            {
                name = "Quyn Sears",
                age = 36,
                riskFactor = "sit amet diam eu dolor"
            },
            new
            {
                name = "Hop Marquez",
                age = 41,
                riskFactor = "dui, nec tempus mauris erat eget ipsum."
            },
            new
            {
                name = "Lydia Green",
                age = 69,
                riskFactor = "Duis"
            },
            new
            {
                name = "Lacy Phelps",
                age = 59,
                riskFactor = "ipsum sodales purus, in molestie tortor nibh sit amet"
            },
            new
            {
                name = "Mohammad Lancaster",
                age = 42,
                riskFactor = "turpis. Aliquam adipiscing lobortis risus."
            },
            new
            {
                name = "Thaddeus Baker",
                age = 33,
                riskFactor = "iaculis aliquet diam. Sed diam lorem,"
            },
            new
            {
                name = "Miriam Noel",
                age = 61,
                riskFactor = "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius."
            },
            new
            {
                name = "Teagan Bruce",
                age = 4,
                riskFactor = "enim, gravida sit amet,"
            },
            new
            {
                name = "Amir Torres",
                age = 10,
                riskFactor = "fringilla ornare placerat, orci"
            },
            new
            {
                name = "Jorden Moreno",
                age = 10,
                riskFactor = "neque sed sem egestas blandit. Nam nulla magna,"
            },
            new
            {
                name = "Alan Gallagher",
                age = 65,
                riskFactor = "hymenaeos. Mauris"
            },
            new
            {
                name = "Tashya Yang",
                age = 52,
                riskFactor = "orci lacus vestibulum"
            },
            new
            {
                name = "Marshall Nolan",
                age = 83,
                riskFactor = "Duis"
            },
            new
            {
                name = "Gisela Carroll",
                age = 27,
                riskFactor = "sed pede nec"
            },
            new
            {
                name = "Hyatt Malone",
                age = 74,
                riskFactor = "orci. Ut sagittis lobortis mauris. Suspendisse"
            },
            new
            {
                name = "Rudyard Bradley",
                age = 67,
                riskFactor = "Donec tincidunt. Donec vitae"
            },
            new
            {
                name = "Cooper Mccall",
                age = 33,
                riskFactor = "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat"
            },
            new
            {
                name = "Lionel Reynolds",
                age = 21,
                riskFactor = "sit amet massa. Quisque porttitor eros nec"
            },
            new
            {
                name = "Octavius Cross",
                age = 13,
                riskFactor = "Mauris blandit enim consequat purus."
            },
            new
            {
                name = "Lunea Best",
                age = 72,
                riskFactor = "diam luctus lobortis. Class aptent taciti sociosqu ad"
            },
            new
            {
                name = "Maya Jacobson",
                age = 59,
                riskFactor = "Duis elementum, dui quis accumsan"
            },
            new
            {
                name = "Melanie Gaines",
                age = 86,
                riskFactor = "rutrum eu, ultrices"
            },
            new
            {
                name = "Elmo William",
                age = 37,
                riskFactor = "Duis ac arcu."
            },
            new
            {
                name = "Reuben Haynes",
                age = 74,
                riskFactor = "est. Nunc laoreet lectus quis massa. Mauris"
            },
            new
            {
                name = "Carl Dunlap",
                age = 4,
                riskFactor = "conubia nostra,"
            },
            new
            {
                name = "Doris James",
                age = 27,
                riskFactor = "tristique senectus et netus et malesuada"
            },
            new
            {
                name = "Quamar Christian",
                age = 76,
                riskFactor = "arcu. Vivamus sit amet risus. Donec"
            },
            new
            {
                name = "Finn Love",
                age = 18,
                riskFactor = "convallis dolor. Quisque tincidunt pede"
            },
            new
            {
                name = "Inez Merritt",
                age = 15,
                riskFactor = "Duis dignissim tempor arcu. Vestibulum ut eros non enim"
            },
            new
            {
                name = "Tamekah Alvarez",
                age = 20,
                riskFactor = "nisi sem semper erat, in consectetuer ipsum"
            },
            new
            {
                name = "Steven Warren",
                age = 85,
                riskFactor = "magna. Suspendisse tristique"
            },
            new
            {
                name = "Nelle Barrett",
                age = 47,
                riskFactor = "Proin nisl sem,"
            },
            new
            {
                name = "Christine Fuller",
                age = 2,
                riskFactor = "a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing"
            },
            new
            {
                name = "Fiona Baxter",
                age = 51,
                riskFactor = "quis, pede. Praesent eu"
            },
            new
            {
                name = "Remedios Briggs",
                age = 31,
                riskFactor = "ac"
            },
            new
            {
                name = "Celeste Terry",
                age = 7,
                riskFactor = "magnis"
            },
            new
            {
                name = "Cecilia Ball",
                age = 28,
                riskFactor = "at arcu. Vestibulum ante ipsum"
            },
            new
            {
                name = "Ivana French",
                age = 71,
                riskFactor = "a, dui. Cras pellentesque."
            },
            new
            {
                name = "Jordan Sweet",
                age = 12,
                riskFactor = "tempus eu, ligula. Aenean euismod mauris"
            },
            new
            {
                name = "Kerry Kent",
                age = 44,
                riskFactor = "ad litora torquent per conubia nostra,"
            },
            new
            {
                name = "Dai Mccarthy",
                age = 82,
                riskFactor = "ut eros non enim commodo hendrerit. Donec porttitor tellus"
            },
            new
            {
                name = "Amber Mcintosh",
                age = 25,
                riskFactor = "vitae sodales nisi magna sed dui."
            },
            new
            {
                name = "Byron Morrison",
                age = 26,
                riskFactor = "nec urna et arcu imperdiet ullamcorper. Duis at lacus."
            },
            new
            {
                name = "Heather Dennis",
                age = 21,
                riskFactor = "faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend."
            },
            new
            {
                name = "Zephania Raymond",
                age = 55,
                riskFactor = "eu tellus. Phasellus elit pede, malesuada vel, venenatis"
            },
            new
            {
                name = "Uma Brock",
                age = 32,
                riskFactor = "bibendum ullamcorper. Duis cursus,"
            },
            new
            {
                name = "Darius Mills",
                age = 25,
                riskFactor = "ac"
            },
            new
            {
                name = "Zorita Johns",
                age = 23,
                riskFactor = "Phasellus fermentum convallis ligula. Donec luctus"
            },
            new
            {
                name = "Wilma Kim",
                age = 56,
                riskFactor = "orci. Donec nibh. Quisque nonummy ipsum non"
            },
            new
            {
                name = "India Manning",
                age = 29,
                riskFactor = "In mi pede, nonummy ut, molestie in, tempus"
            },
            new
            {
                name = "Carson Wilder",
                age = 18,
                riskFactor = "nibh. Quisque nonummy ipsum non arcu."
            },
            new
            {
                name = "Ursa Robinson",
                age = 69,
                riskFactor = "Maecenas libero"
            },
            new
            {
                name = "Sean Lowe",
                age = 65,
                riskFactor = "augue ut lacus. Nulla tincidunt, neque"
            },
            new
            {
                name = "Genevieve Duncan",
                age = 61,
                riskFactor = "neque non quam."
            },
            new
            {
                name = "Emerson Austin",
                age = 24,
                riskFactor = "tellus faucibus leo, in lobortis tellus"
            },
            new
            {
                name = "Rhoda Spence",
                age = 75,
                riskFactor = "ultrices iaculis odio. Nam interdum"
            },
            new
            {
                name = "Kuame Montgomery",
                age = 79,
                riskFactor = "magna. Lorem ipsum dolor"
            },
            new
            {
                name = "Rae Byers",
                age = 30,
                riskFactor = "ullamcorper, nisl arcu iaculis enim, sit amet ornare"
            },
            new
            {
                name = "Haviva Mccray",
                age = 77,
                riskFactor = "lorem vitae odio sagittis semper. Nam tempor"
            },
            new
            {
                name = "Kimberly Hicks",
                age = 11,
                riskFactor = "auctor, nunc nulla vulputate dui, nec tempus mauris erat eget"
            },
            new
            {
                name = "Rose Koch",
                age = 68,
                riskFactor = "lectus."
            },
            new
            {
                name = "Travis Battle",
                age = 51,
                riskFactor = "dis parturient montes, nascetur"
            },
            new
            {
                name = "Halee Dotson",
                age = 44,
                riskFactor = "enim, condimentum eget,"
            },
            new
            {
                name = "Zenia Macdonald",
                age = 86,
                riskFactor = "nec, mollis"
            },
            new
            {
                name = "Hannah Contreras",
                age = 38,
                riskFactor = "lobortis augue scelerisque mollis."
            },
            new
            {
                name = "Karen Bird",
                age = 46,
                riskFactor = "Duis volutpat nunc sit amet"
            },
            new
            {
                name = "Abigail Dennis",
                age = 21,
                riskFactor = "mollis dui, in sodales elit erat"
            },
            new
            {
                name = "Felix Wallace",
                age = 88,
                riskFactor = "Donec egestas. Duis"
            },
            new
            {
                name = "Jael Gardner",
                age = 28,
                riskFactor = "facilisis, magna tellus faucibus leo, in lobortis tellus justo sit"
            },
            new
            {
                name = "Belle Zimmerman",
                age = 63,
                riskFactor = "ornare, elit"
            },
            new
            {
                name = "Melyssa Fox",
                age = 46,
                riskFactor = "sit amet, dapibus id, blandit at,"
            },
            new
            {
                name = "Barbara Russell",
                age = 72,
                riskFactor = "odio. Etiam ligula tortor, dictum eu, placerat"
            },
            new
            {
                name = "Lyle Fuller",
                age = 14,
                riskFactor = "in felis."
            },
            new
            {
                name = "Nathan Burgess",
                age = 13,
                riskFactor = "convallis dolor. Quisque tincidunt pede ac urna."
            },
            new
            {
                name = "Otto Howe",
                age = 33,
                riskFactor = "id"
            },
            new
            {
                name = "Lamar Williamson",
                age = 42,
                riskFactor = "enim. Mauris quis turpis vitae purus gravida sagittis. Duis"
            },
            new
            {
                name = "Gwendolyn Ratliff",
                age = 68,
                riskFactor = "libero mauris, aliquam eu, accumsan sed, facilisis vitae,"
            },
            new
            {
                name = "Serina Johnson",
                age = 23,
                riskFactor = "ut odio vel est tempor bibendum. Donec felis orci,"
            },
            new
            {
                name = "Nomlanga Nichols",
                age = 31,
                riskFactor = "mi, ac mattis velit"
            },
            new
            {
                name = "Caldwell Dennis",
                age = 34,
                riskFactor = "eleifend. Cras sed leo. Cras vehicula aliquet"
            },
            new
            {
                name = "Kenneth Silva",
                age = 12,
                riskFactor = "ac turpis"
            },
            new
            {
                name = "Athena Wooten",
                age = 17,
                riskFactor = "laoreet ipsum."
            },
            new
            {
                name = "Zenaida Booth",
                age = 41,
                riskFactor = "justo faucibus lectus, a sollicitudin orci sem"
            },
            new
            {
                name = "Bruce Spears",
                age = 12,
                riskFactor = "eu eros. Nam consequat dolor vitae"
            },
            new
            {
                name = "Erasmus Vasquez",
                age = 65,
                riskFactor = "lectus sit amet"
            },
            new
            {
                name = "Kylan Henson",
                age = 15,
                riskFactor = "dui. Cras"
            },
            new
            {
                name = "Deirdre Kim",
                age = 2,
                riskFactor = "et malesuada fames ac turpis"
            },
            new
            {
                name = "Amir Curtis",
                age = 24,
                riskFactor = "tempor lorem, eget mollis"
            },
            new
            {
                name = "Shaine Mcclain",
                age = 73,
                riskFactor = "quis diam luctus lobortis. Class aptent taciti"
            },
            new
            {
                name = "Beau Anthony",
                age = 4,
                riskFactor = "vulputate, risus a ultricies adipiscing, enim mi tempor"
            },
            new
            {
                name = "Neve Weeks",
                age = 72,
                riskFactor = "blandit congue."
            },
            new
            {
                name = "Erin England",
                age = 7,
                riskFactor = "ut lacus."
            },
            new
            {
                name = "Rae Trevino",
                age = 84,
                riskFactor = "pede. Praesent"
            },
            new
            {
                name = "Dexter Hudson",
                age = 22,
                riskFactor = "Proin nisl sem, consequat nec, mollis vitae, posuere at,"
            },
            new
            {
                name = "Grace Chavez",
                age = 77,
                riskFactor = "eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in"
            },
            new
            {
                name = "Travis Cardenas",
                age = 47,
                riskFactor = "penatibus et magnis"
            }
        };

        var result = data.Where(d => string.IsNullOrWhiteSpace(query) || d.name.ToLower().Contains(query.ToLower())).ToList();

        return Ok(result);
    }
}