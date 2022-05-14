using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EFContext;

public class HospitalContext : DbContext
{
    public DbSet<Hospital> Hospitals { get; set; }

    public string DbPath { get; }

    public HospitalContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "hospital.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}

public class Hospital
{
    public int HospitalId { get; set; }
    public string? Name { get; set; }
    public string? State { get; set; }
    public string? City { get; set; }
    public int Staff { get; set; }
}