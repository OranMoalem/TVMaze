using System;
using System.Collections.Generic;
using System.Net;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nancy.Json;
using Newtonsoft.Json;

namespace TVMazeSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EntireWorld")]
    public class TVMazeController : ControllerBase
    {
        [HttpGet]
        [Route("{searchText}")]
        public IActionResult GetTVShows(string searchText)
        {
            try
            {
                // Get json from the server 
                var json = new WebClient().DownloadString("http://api.tvmaze.com/search/shows?q=" + searchText);
                // Convert json
                var objResponse1 = JsonConvert.DeserializeObject<List<TVMazeModel>>(json);
                var json2 = new JavaScriptSerializer().Serialize(objResponse1);
                return Ok(json2);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
