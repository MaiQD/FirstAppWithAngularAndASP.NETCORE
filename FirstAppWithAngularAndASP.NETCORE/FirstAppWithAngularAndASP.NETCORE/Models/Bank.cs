using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAppWithAngularAndASP.NETCORE.Models
{
	public class Bank
	{
		[Key]
		public int BankID { get; set; }
		//phải khởi tạo kiểu dữ liệu
		[Column(TypeName ="nvarchar(100)")]
		public string BankName { get; set; }
	}
}
