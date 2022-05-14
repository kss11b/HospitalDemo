using Microsoft.AspNetCore.Mvc;
using EFContext;
namespace HospitalDemo.Controllers;

[ApiController]
[Route("hospital/")]
public class HospitalController : ControllerBase
{
    private readonly ILogger<HospitalController> _logger;
    private readonly HospitalContext _context;

    public HospitalController(ILogger<HospitalController> logger, HospitalContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet()]
    public IEnumerable<Hospital> Get()
    {
        var response = _context.Hospitals.ToList<Hospital>();
        return response;

    }
    [HttpPost()]
    public string Post(Hospital hospital)
    {
        _context.Hospitals.Add(hospital);
        _context.SaveChanges();
        return "success";
    }
    [HttpDelete("{id}")]
    public string Delete(int id)
    {
        Hospital hospital = new Hospital () { HospitalId = id };
        _context.Hospitals.Attach(hospital);
        _context.Hospitals.Remove(hospital);
        _context.SaveChanges();
        return "success";

    }
}
