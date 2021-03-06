﻿// <auto-generated />
using FirstAppWithAngularAndASP.NETCORE.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FirstAppWithAngularAndASP.NETCORE.Migrations
{
    [DbContext(typeof(APIDBContext))]
    [Migration("20200828121453_InitialDB")]
    partial class InitialDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FirstAppWithAngularAndASP.NETCORE.Models.Bank", b =>
                {
                    b.Property<int>("BankID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BankName")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("BankID");

                    b.ToTable("Banks");
                });

            modelBuilder.Entity("FirstAppWithAngularAndASP.NETCORE.Models.BankAccount", b =>
                {
                    b.Property<int>("BankAccountId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AccountHolder")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AccountNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.Property<int>("BankID");

                    b.Property<string>("IFSC")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("BankAccountId");

                    b.ToTable("BankAccounts");
                });
#pragma warning restore 612, 618
        }
    }
}
