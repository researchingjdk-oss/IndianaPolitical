// Indiana Election Data - Hamilton, Marion, and Boone Counties Only
const electionData = {
  "metadata": {
    "state": "Indiana",
    "last_updated": "2024-11-05",
    "data_source": "Indiana Election Division",
    "description": "Election database for Hamilton, Marion, and Boone Counties in Indiana",
    "total_counties": 3
  },
  "counties": {
    "Hamilton": {
      "name": "Hamilton County",
      "zip_codes": [
        "46032", "46033", "46034", "46035", "46036", "46037", "46038", "46040",
        "46044", "46048", "46049", "46050", "46051", "46052", "46055", "46056",
        "46057", "46060", "46062", "46064", "46065", "46069", "46070", "46071",
        "46072", "46074", "46075", "46076", "46077", "46082", "46085"
      ],
      "candidates": {
        "federal": {
          "US Senate": [
            {"name": "Mike Braun", "party": "Republican", "incumbent": true},
            {"name": "Marc Carmichael", "party": "Democratic"}
          ],
          "US House District 5": [
            {"name": "Victoria Spartz", "party": "Republican", "incumbent": true}
          ]
        },
        "state": {
          "Governor": [
            {"name": "Eric Holcomb", "party": "Republican", "incumbent": false},
            {"name": "Jennifer McCormick", "party": "Democratic"}
          ],
          "State Senate District 20": [
            {"name": "Mark Messmer", "party": "Republican", "incumbent": true}
          ],
          "State Senate District 21": [
            {"name": "James Merritt", "party": "Republican", "incumbent": true}
          ],
          "State Senate District 22": [
            {"name": "Spencer Deery", "party": "Republican", "incumbent": true}
          ],
          "State House District 24": [
            {"name": "Donna Schaibley", "party": "Republican", "incumbent": true}
          ],
          "State House District 29": [
            {"name": "J.D. Prescott", "party": "Republican", "incumbent": true}
          ],
          "State House District 38": [
            {"name": "Heath VanNatter", "party": "Republican", "incumbent": true}
          ],
          "State House District 86": [
            {"name": "Bob Cherry", "party": "Republican", "incumbent": true}
          ]
        },
        "county": {
          "Commissioner District 1": [
            {"name": "Steve Dillinger", "party": "Republican", "incumbent": true}
          ],
          "Commissioner District 2": [
            {"name": "Mark Heirbrandt", "party": "Republican", "incumbent": true}
          ],
          "Commissioner District 3": [
            {"name": "Fred Glynn", "party": "Republican", "incumbent": true}
          ],
          "Council District 1": [
            {"name": "Amy Massillamany", "party": "Republican", "incumbent": true}
          ],
          "Council District 2": [
            {"name": "Brad Cumberland", "party": "Republican", "incumbent": true}
          ],
          "Council District 3": [
            {"name": "Pam Crum", "party": "Republican", "incumbent": true}
          ],
          "Council District 4": [
            {"name": "Ken Alexander", "party": "Republican", "incumbent": true}
          ],
          "Sheriff": [
            {"name": "Dennis Quakenbush", "party": "Republican", "incumbent": true}
          ],
          "Prosecutor": [
            {"name": "D. Lee Buckingham II", "party": "Republican", "incumbent": true}
          ],
          "Assessor": [
            {"name": "Robin Keen", "party": "Republican", "incumbent": true}
          ],
          "Auditor": [
            {"name": "Jill Jackson", "party": "Republican", "incumbent": true}
          ],
          "Treasurer": [
            {"name": "Mike Johnson", "party": "Republican", "incumbent": true}
          ],
          "Recorder": [
            {"name": "Karen Brewer", "party": "Republican", "incumbent": true}
          ],
          "Coroner": [
            {"name": "John Chavis", "party": "Republican", "incumbent": true}
          ]
        }
      },
      "referendums": [
        {
          "title": "Hamilton Southeastern Schools Referendum",
          "question": "Shall Hamilton Southeastern Schools issue bonds for new school construction and renovations?",
          "type": "School",
          "year": 2024,
          "status": "Active"
        },
        {
          "title": "Carmel Clay Schools Referendum",
          "question": "Shall Carmel Clay Schools continue the property tax levy for operating expenses?",
          "type": "School",
          "year": 2024,
          "status": "Active"
        }
      ],
      "voter_questions": [
        {
          "question": "Should Hamilton County implement a wheel tax for road improvements?",
          "type": "Local",
          "year": 2024
        },
        {
          "question": "Should Hamilton County increase funding for mental health services?",
          "type": "Local",
          "year": 2024
        }
      ]
    },
    "Marion": {
      "name": "Marion County",
      "zip_codes": [
        "46201", "46202", "46203", "46204", "46205", "46206", "46207", "46208",
        "46209", "46211", "46214", "46216", "46217", "46218", "46219", "46220",
        "46221", "46222", "46223", "46224", "46225", "46226", "46227", "46228",
        "46229", "46230", "46231", "46234", "46235", "46236", "46237", "46239",
        "46240", "46241", "46242", "46244", "46249", "46250", "46251", "46253",
        "46254", "46255", "46256", "46259", "46260", "46262", "46266", "46268",
        "46277", "46278", "46280", "46282", "46283", "46285", "46290", "46298"
      ],
      "candidates": {
        "federal": {
          "US Senate": [
            {"name": "Mike Braun", "party": "Republican", "incumbent": true},
            {"name": "Marc Carmichael", "party": "Democratic"}
          ],
          "US House District 7": [
            {"name": "André Carson", "party": "Democratic", "incumbent": true}
          ]
        },
        "state": {
          "Governor": [
            {"name": "Eric Holcomb", "party": "Republican", "incumbent": false},
            {"name": "Jennifer McCormick", "party": "Democratic"}
          ],
          "State Senate District 33": [
            {"name": "Greg Taylor", "party": "Democratic", "incumbent": true}
          ],
          "State Senate District 34": [
            {"name": "Jean Breaux", "party": "Democratic", "incumbent": true}
          ],
          "State Senate District 36": [
            {"name": "Jon Ford", "party": "Republican", "incumbent": true}
          ],
          "State House District 89": [
            {"name": "John Bartlett", "party": "Democratic", "incumbent": true}
          ],
          "State House District 90": [
            {"name": "Mike Speedy", "party": "Republican", "incumbent": true}
          ],
          "State House District 91": [
            {"name": "Robert Behning", "party": "Republican", "incumbent": true}
          ],
          "State House District 92": [
            {"name": "Karlee McGill", "party": "Democratic", "incumbent": true}
          ],
          "State House District 93": [
            {"name": "Chris Chyung", "party": "Democratic", "incumbent": true}
          ],
          "State House District 94": [
            {"name": "Cheryl Bleymaier", "party": "Republican", "incumbent": true}
          ],
          "State House District 96": [
            {"name": "Greg Steuerwald", "party": "Republican", "incumbent": true}
          ],
          "State House District 97": [
            {"name": "John Young", "party": "Republican", "incumbent": true}
          ]
        },
        "county": {
          "Commissioner District 1": [
            {"name": "Bill Oesterle", "party": "Republican", "incumbent": true}
          ],
          "Commissioner District 2": [
            {"name": "Kyle Walker", "party": "Republican", "incumbent": true}
          ],
          "Commissioner District 3": [
            {"name": "Kevin Taylor", "party": "Democratic", "incumbent": true}
          ],
          "Council District 1": [
            {"name": "Phil GiaQuinta", "party": "Democratic", "incumbent": true}
          ],
          "Council District 2": [
            {"name": "Martin Carbaugh", "party": "Republican", "incumbent": true}
          ],
          "Council District 3": [
            {"name": "Matt Lehman", "party": "Republican", "incumbent": true}
          ],
          "Council District 4": [
            {"name": "David Abbott", "party": "Republican", "incumbent": true}
          ],
          "Sheriff": [
            {"name": "Kerry Forestal", "party": "Democratic", "incumbent": true}
          ],
          "Prosecutor": [
            {"name": "Ryan Mears", "party": "Democratic", "incumbent": true}
          ],
          "Assessor": [
            {"name": "Joseph O'Connor", "party": "Democratic", "incumbent": true}
          ],
          "Auditor": [
            {"name": "Barbara Lawrence", "party": "Democratic", "incumbent": true}
          ],
          "Treasurer": [
            {"name": "Duane Burgess", "party": "Republican", "incumbent": true}
          ],
          "Recorder": [
            {"name": "Kate Sweeney Bell", "party": "Democratic", "incumbent": true}
          ],
          "Coroner": [
            {"name": "Alfonso Jones", "party": "Democratic", "incumbent": true}
          ]
        }
      },
      "referendums": [
        {
          "title": "Indianapolis Public Schools Referendum",
          "question": "Shall IPS issue bonds for school safety and facility improvements?",
          "type": "School",
          "year": 2024,
          "status": "Active"
        },
        {
          "title": "Marion County Public Library Referendum",
          "question": "Shall the Indianapolis Public Library continue its property tax levy?",
          "type": "Library",
          "year": 2024,
          "status": "Active"
        }
      ],
      "voter_questions": [
        {
          "question": "Should Marion County implement a local option income tax for public safety?",
          "type": "Local",
          "year": 2024
        },
        {
          "question": "Should the City of Indianapolis increase funding for homeless services?",
          "type": "Municipal",
          "year": 2024
        }
      ]
    },
    "Boone": {
      "name": "Boone County",
      "zip_codes": [
        "46001", "46011", "46012", "46013", "46030", "46032", "46033", "46034",
        "46035", "46036", "46037", "46038", "46040", "46041", "46044", "46045",
        "46048", "46049", "46050", "46051", "46052", "46055", "46056", "46057",
        "46058", "46060", "46062", "46064", "46065", "46069", "46070", "46071",
        "46072", "46074", "46075", "46076", "46077", "46082", "46085"
      ],
      "candidates": {
        "federal": {
          "US Senate": [
            {"name": "Mike Braun", "party": "Republican", "incumbent": true},
            {"name": "Marc Carmichael", "party": "Democratic"}
          ],
          "US House District 5": [
            {"name": "Victoria Spartz", "party": "Republican", "incumbent": true}
          ]
        },
        "state": {
          "Governor": [
            {"name": "Eric Holcomb", "party": "Republican", "incumbent": false},
            {"name": "Jennifer McCormick", "party": "Democratic"}
          ],
          "State Senate District 21": [
            {"name": "James Merritt", "party": "Republican", "incumbent": true}
          ],
          "State Senate District 23": [
            {"name": "Scott Alexander", "party": "Republican", "incumbent": true}
          ],
          "State House District 24": [
            {"name": "Donna Schaibley", "party": "Republican", "incumbent": true}
          ],
          "State House District 29": [
            {"name": "J.D. Prescott", "party": "Republican", "incumbent": true}
          ],
          "State House District 38": [
            {"name": "Heath VanNatter", "party": "Republican", "incumbent": true}
          ]
        },
        "county": {
          "Commissioner District 1": [
            {"name": "Jeff Wolfe", "party": "Republican", "incumbent": true}
          ],
          "Commissioner District 2": [
            {"name": "Tom Santelli", "party": "Republican", "incumbent": true}
          ],
          "Commissioner District 3": [
            {"name": "Diane A. Will", "party": "Republican", "incumbent": true}
          ],
          "Council District 1": [
            {"name": "Dan Swain", "party": "Republican", "incumbent": true}
          ],
          "Council District 2": [
            {"name": "Steve Jacob", "party": "Republican", "incumbent": true}
          ],
          "Council District 3": [
            {"name": "Elise Nieshalla", "party": "Republican", "incumbent": true}
          ],
          "Council District 4": [
            {"name": "Jeff Benner", "party": "Republican", "incumbent": true}
          ],
          "Sheriff": [
            {"name": "Mike Nielsen", "party": "Republican", "incumbent": true}
          ],
          "Prosecutor": [
            {"name": "Todd Meyer", "party": "Republican", "incumbent": true}
          ],
          "Assessor": [
            {"name": "Robyn L. Lowery", "party": "Republican", "incumbent": true}
          ],
          "Auditor": [
            {"name": "Julie Overman", "party": "Republican", "incumbent": true}
          ],
          "Treasurer": [
            {"name": "Kimberly A. Pate", "party": "Republican", "incumbent": true}
          ],
          "Recorder": [
            {"name": "Lori A. Milewski", "party": "Republican", "incumbent": true}
          ],
          "Coroner": [
            {"name": "Jeff Prier", "party": "Republican", "incumbent": true}
          ]
        }
      },
      "referendums": [
        {
          "title": "Zionsville Community Schools Referendum",
          "question": "Shall Zionsville Community Schools continue the property tax levy for educational purposes?",
          "type": "School",
          "year": 2024,
          "status": "Active"
        },
        {
          "title": "Lebanon Community School Corporation Referendum",
          "question": "Shall Lebanon Schools issue bonds for new school construction?",
          "type": "School",
          "year": 2024,
          "status": "Pending"
        }
      ],
      "voter_questions": [
        {
          "question": "Should Boone County implement a wheel tax for road maintenance?",
          "type": "Local",
          "year": 2024
        },
        {
          "question": "Should Boone County establish a new economic development district?",
          "type": "Local",
          "year": 2024
        }
      ]
    }
  },
  "zip_code_map": {
    "46001": "Boone",
    "46011": "Boone",
    "46012": "Boone",
    "46013": "Boone",
    "46030": "Boone",
    "46032": "Boone",
    "46033": "Boone",
    "46034": "Boone",
    "46035": "Boone",
    "46036": "Boone",
    "46037": "Boone",
    "46038": "Boone",
    "46040": "Boone",
    "46041": "Boone",
    "46044": "Boone",
    "46045": "Boone",
    "46048": "Boone",
    "46049": "Boone",
    "46050": "Boone",
    "46051": "Boone",
    "46052": "Boone",
    "46055": "Boone",
    "46056": "Boone",
    "46057": "Boone",
    "46058": "Boone",
    "46060": "Boone",
    "46062": "Boone",
    "46064": "Boone",
    "46065": "Boone",
    "46069": "Boone",
    "46070": "Boone",
    "46071": "Boone",
    "46072": "Boone",
    "46074": "Boone",
    "46075": "Boone",
    "46076": "Boone",
    "46077": "Boone",
    "46082": "Boone",
    "46085": "Boone",
    "46032": "Hamilton",
    "46033": "Hamilton",
    "46034": "Hamilton",
    "46035": "Hamilton",
    "46036": "Hamilton",
    "46037": "Hamilton",
    "46038": "Hamilton",
    "46040": "Hamilton",
    "46044": "Hamilton",
    "46048": "Hamilton",
    "46049": "Hamilton",
    "46050": "Hamilton",
    "46051": "Hamilton",
    "46052": "Hamilton",
    "46055": "Hamilton",
    "46056": "Hamilton",
    "46057": "Hamilton",
    "46060": "Hamilton",
    "46062": "Hamilton",
    "46064": "Hamilton",
    "46065": "Hamilton",
    "46069": "Hamilton",
    "46070": "Hamilton",
    "46071": "Hamilton",
    "46072": "Hamilton",
    "46074": "Hamilton",
    "46075": "Hamilton",
    "46076": "Hamilton",
    "46077": "Hamilton",
    "46082": "Hamilton",
    "46085": "Hamilton",
    "46201": "Marion",
    "46202": "Marion",
    "46203": "Marion",
    "46204": "Marion",
    "46205": "Marion",
    "46206": "Marion",
    "46207": "Marion",
    "46208": "Marion",
    "46209": "Marion",
    "46211": "Marion",
    "46214": "Marion",
    "46216": "Marion",
    "46217": "Marion",
    "46218": "Marion",
    "46219": "Marion",
    "46220": "Marion",
    "46221": "Marion",
    "46222": "Marion",
    "46223": "Marion",
    "46224": "Marion",
    "46225": "Marion",
    "46226": "Marion",
    "46227": "Marion",
    "46228": "Marion",
    "46229": "Marion",
    "46230": "Marion",
    "46231": "Marion",
    "46234": "Marion",
    "46235": "Marion",
    "46236": "Marion",
    "46237": "Marion",
    "46239": "Marion",
    "46240": "Marion",
    "46241": "Marion",
    "46242": "Marion",
    "46244": "Marion",
    "46249": "Marion",
    "46250": "Marion",
    "46251": "Marion",
    "46253": "Marion",
    "46254": "Marion",
    "46255": "Marion",
    "46256": "Marion",
    "46259": "Marion",
    "46260": "Marion",
    "46262": "Marion",
    "46266": "Marion",
    "46268": "Marion",
    "46277": "Marion",
    "46278": "Marion",
    "46280": "Marion",
    "46282": "Marion",
    "46283": "Marion",
    "46285": "Marion",
    "46290": "Marion",
    "46298": "Marion"
  }
