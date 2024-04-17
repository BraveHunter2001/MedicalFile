using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    /// <inheritdoc />
    public partial class AddPatinents : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("""
                INSERT INTO public."Patients" ("Name","Age","RiskFactor") VALUES
                ('Burke Booth',66,'tincidunt dui augue eu tellus. Phasellus elit pede,'),
                ('Wing Bright',6,'risus. Donec egestas. Duis ac arcu.'),
                ('Shannon Mccarty',12,'lacinia orci, consectetuer euismod est arcu ac orci. Ut'),
                ('Elton Bright',31,'rutrum lorem ac risus. Morbi metus.'),
                ('MacKenzie Shields',35,'arcu. Sed eu nibh vulputate mauris sagittis'),
                ('Ivan Robertson',44,'eget tincidunt dui augue eu tellus. Phasellus elit'),
                ('Philip Hickman',77,'eu odio tristique pharetra. Quisque ac libero nec ligula'),
                ('Lester Lowe',10,'rutrum lorem ac risus. Morbi metus.'),
                ('Calvin Suarez',58,'Morbi neque tellus, imperdiet non, vestibulum nec, euismod in,'),
                ('Vaughan Little',72,'orci, consectetuer euismod est arcu ac');

                """);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
