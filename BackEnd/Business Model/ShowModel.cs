using System;
using System.Collections.Generic;
using System.Text;

namespace TVMazeSearch
{
    public class ShowModel
    {
        public int id { get; set; }

        public string url { get; set; }

        public RatingModel rating { get; set; }

        public ImageModel image { get; set; }

        public string name { get; set; }

        public string officialSite { get; set; }
    }
}
