using Microsoft.AspNetCore;

namespace HospitalDemo
{
    public class Program
    {
        // private static readonly HttpClient client = new HttpClient();

        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();

        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<HospitalDemo.Startup>();
    }
}


