// Indiana Election Data (2026 General Election) - Hamilton, Marion, and Boone Counties Only
const electionData = {
  "metadata": {
    "state": "Indiana",
    "election": "2026 General Election (November 3, 2026)",
    "last_updated": "2026-11-07",
    "data_source": "Hamilton County Election Office; Boone County Election Summary Report; WFYI and Mirror Indy (Marion); MultiState and Indiana Capital Chronicle (state and legislative races)",
    "description": "2026 general election ballot options (candidates and public questions) for Hamilton, Marion, and Boone Counties in Indiana",
    "total_counties": 3,
    "notes": [
      "Ballot options only; no results are included.",
      "No US Senate or Governor race was on Indiana's 2026 ballot.",
      "'incumbent' is set only where a source states it or the incumbent lost; absence does not mean the candidate was a challenger.",
      "'unopposed' marks races with a single candidate on the ballot.",
      "Marion County local public questions were not verified and are not listed.",
      "School board and township races are not included."
    ]
  },
  "counties": {
    "Hamilton": {
      "name": "Hamilton County",
      "zip_codes": [
        "46032",
        "46033",
        "46034",
        "46035",
        "46036",
        "46037",
        "46038",
        "46040",
        "46044",
        "46048",
        "46049",
        "46050",
        "46051",
        "46052",
        "46055",
        "46056",
        "46057",
        "46060",
        "46062",
        "46064",
        "46065",
        "46069",
        "46070",
        "46071",
        "46072",
        "46074",
        "46075",
        "46076",
        "46077",
        "46082",
        "46085"
      ],
      "candidates": {
        "federal": {
          "US House District 5": [
            {
              "name": "Victoria Spartz",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "J.D. Ford",
              "party": "Democratic"
            }
          ]
        },
        "state": {
          "Secretary of State": [
            {
              "name": "Max Engling",
              "party": "Republican"
            },
            {
              "name": "Beau Bayh",
              "party": "Democratic"
            },
            {
              "name": "Lauri A. Shillings",
              "party": "Libertarian"
            },
            {
              "name": "Greg Ballard",
              "party": "Lincoln"
            }
          ],
          "State Comptroller": [
            {
              "name": "Elise Nieshalla",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Jessica Bailey",
              "party": "Democratic"
            },
            {
              "name": "John Schick",
              "party": "Libertarian"
            }
          ],
          "Treasurer of State": [
            {
              "name": "Daniel Elliott",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Coumba Kebe",
              "party": "Democratic"
            }
          ],
          "State Senate District 21": [
            {
              "name": "Tracey Powell",
              "party": "Republican"
            },
            {
              "name": "Kirsten Root",
              "party": "Democratic"
            }
          ],
          "State Senate District 25": [
            {
              "name": "Mike Gaskill",
              "party": "Republican"
            },
            {
              "name": "Tamie Dixon-Tatum",
              "party": "Democratic"
            }
          ],
          "State Senate District 29": [
            {
              "name": "John Ruckelshaus",
              "party": "Republican"
            },
            {
              "name": "Kristina Moorhead",
              "party": "Democratic"
            }
          ],
          "State Senate District 31": [
            {
              "name": "Juanita Albright",
              "party": "Republican"
            },
            {
              "name": "Kerry J. Forestal",
              "party": "Democratic"
            }
          ],
          "State House District 24": [
            {
              "name": "Hunter Smith",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Racheal Bleicher",
              "party": "Democratic"
            }
          ],
          "State House District 29": [
            {
              "name": "Alaina Shonkwiler",
              "party": "Republican"
            },
            {
              "name": "Devon Wellington",
              "party": "Democratic"
            }
          ],
          "State House District 32": [
            {
              "name": "Paul G. Nix",
              "party": "Republican"
            },
            {
              "name": "Victoria Garcia Wilburn",
              "party": "Democratic"
            }
          ],
          "State House District 37": [
            {
              "name": "Todd Huston",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Lauren S. Cole",
              "party": "Democratic"
            }
          ],
          "State House District 39": [
            {
              "name": "Danny Lopez",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Lindsay Gramlich",
              "party": "Democratic"
            }
          ],
          "State House District 88": [
            {
              "name": "Chris Jeter",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Stephanie Jo Yocum",
              "party": "Democratic"
            }
          ]
        },
        "county": {
          "Commissioner District 1": [
            {
              "name": "Christine Altman",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Ti'Gre McNear",
              "party": "Democratic"
            }
          ],
          "Council District 1": [
            {
              "name": "Tim Griffin",
              "party": "Republican"
            },
            {
              "name": "Christopher Daniel",
              "party": "Democratic"
            }
          ],
          "Council District 2": [
            {
              "name": "Amy Elizabeth Massillamany",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Nathan Bullock",
              "party": "Democratic"
            }
          ],
          "Council District 3": [
            {
              "name": "Mark F. Hall",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Doug May",
              "party": "Democratic"
            }
          ],
          "Council District 4": [
            {
              "name": "Ken Alexander",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Jason E. Frank",
              "party": "Democratic"
            }
          ],
          "Sheriff": [
            {
              "name": "Dustin K. Dixon",
              "party": "Republican"
            },
            {
              "name": "Charles Hollowell",
              "party": "Democratic"
            }
          ],
          "Prosecutor": [
            {
              "name": "Josh Kocher",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Circuit Court Clerk": [
            {
              "name": "Beth Sheller",
              "party": "Republican"
            },
            {
              "name": "Alexandra E. Wilson",
              "party": "Democratic"
            }
          ],
          "Assessor": [
            {
              "name": "Kevin W. Poore",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Recorder": [
            {
              "name": "Trini Beaver",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Coroner": [
            {
              "name": "Jeff D. Jellison",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 3": [
            {
              "name": "Chris Evans",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 4": [
            {
              "name": "Angela Brown Swenson",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 5": [
            {
              "name": "David K. Najjar",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 8": [
            {
              "name": "Danica L. Eyler",
              "party": "Republican"
            },
            {
              "name": "Emily L. Angel Shaw",
              "party": "Democratic"
            }
          ],
          "Superior Court Judge No. 9": [
            {
              "name": "Paul C. Sweeney",
              "party": "Republican",
              "unopposed": true
            }
          ]
        }
      },
      "referendums": [
        {
          "title": "Carmel Clay Schools Referendum",
          "question": "School funding referendum",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Hamilton Southeastern Schools Referendum",
          "question": "School funding referendum",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Noblesville Schools Referendum",
          "question": "School funding referendum",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Westfield Washington Schools Referendum",
          "question": "School funding referendum",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Sheridan Schools Referendum",
          "question": "School funding referendum",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        }
      ],
      "voter_questions": [
        {
          "title": "Public Question 1 - Right to Bail",
          "question": "Provide for the denial of bail when the accused is found to pose a substantial risk to another person (Public Question 1)",
          "type": "Statewide",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Public Question 2 - Judge Residence",
          "question": "Require city and town court judges to reside in the county where the court is located or the bordering county closest to the court (Public Question 2)",
          "type": "Statewide",
          "year": 2026,
          "status": "On ballot"
        }
      ]
    },
    "Marion": {
      "name": "Marion County",
      "zip_codes": [
        "46201",
        "46202",
        "46203",
        "46204",
        "46205",
        "46206",
        "46207",
        "46208",
        "46209",
        "46211",
        "46214",
        "46216",
        "46217",
        "46218",
        "46219",
        "46220",
        "46221",
        "46222",
        "46223",
        "46224",
        "46225",
        "46226",
        "46227",
        "46228",
        "46229",
        "46230",
        "46231",
        "46234",
        "46235",
        "46236",
        "46237",
        "46239",
        "46240",
        "46241",
        "46242",
        "46244",
        "46249",
        "46250",
        "46251",
        "46253",
        "46254",
        "46255",
        "46256",
        "46259",
        "46260",
        "46262",
        "46266",
        "46268",
        "46277",
        "46278",
        "46280",
        "46282",
        "46283",
        "46285",
        "46290",
        "46298"
      ],
      "candidates": {
        "federal": {
          "US House District 6": [
            {
              "name": "Jefferson Shreve",
              "party": "Republican",
              "incumbent": true
            }
          ],
          "US House District 7": [
            {
              "name": "André Carson",
              "party": "Democratic",
              "incumbent": true
            },
            {
              "name": "Patrick McAuley",
              "party": "Republican"
            },
            {
              "name": "James Sceniak",
              "party": "Libertarian"
            }
          ]
        },
        "state": {
          "Secretary of State": [
            {
              "name": "Max Engling",
              "party": "Republican"
            },
            {
              "name": "Beau Bayh",
              "party": "Democratic"
            },
            {
              "name": "Lauri A. Shillings",
              "party": "Libertarian"
            },
            {
              "name": "Greg Ballard",
              "party": "Lincoln"
            }
          ],
          "State Comptroller": [
            {
              "name": "Elise Nieshalla",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Jessica Bailey",
              "party": "Democratic"
            },
            {
              "name": "John Schick",
              "party": "Libertarian"
            }
          ],
          "Treasurer of State": [
            {
              "name": "Daniel Elliott",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Coumba Kebe",
              "party": "Democratic"
            }
          ],
          "State Senate District 29": [
            {
              "name": "John Ruckelshaus",
              "party": "Republican"
            },
            {
              "name": "Kristina Moorhead",
              "party": "Democratic"
            }
          ],
          "State Senate District 31": [
            {
              "name": "Juanita Albright",
              "party": "Republican"
            },
            {
              "name": "Kerry J. Forestal",
              "party": "Democratic"
            }
          ],
          "State House District 86": [
            {
              "name": "Glenn Bill",
              "party": "Republican"
            },
            {
              "name": "Ed DeLaney",
              "party": "Democratic"
            }
          ],
          "State House District 87": [
            {
              "name": "Carey Hamilton",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 88": [
            {
              "name": "Chris Jeter",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Stephanie Jo Yocum",
              "party": "Democratic"
            }
          ],
          "State House District 89": [
            {
              "name": "Mitch Gore",
              "party": "Democratic"
            },
            {
              "name": "Donald Weingarten",
              "party": "Libertarian"
            }
          ],
          "State House District 90": [
            {
              "name": "Andrew Ireland",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "David Lawrence Boyd",
              "party": "Democratic"
            }
          ],
          "State House District 91": [
            {
              "name": "Bob Behning",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Jarren Hurt",
              "party": "Democratic"
            }
          ],
          "State House District 92": [
            {
              "name": "Reneé Pack",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 93": [
            {
              "name": "Julie McGuire",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Eva Rosberg",
              "party": "Democratic"
            }
          ],
          "State House District 94": [
            {
              "name": "Cherrish Pryor",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 95": [
            {
              "name": "John Bartlett",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 96": [
            {
              "name": "Gregory Porter",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 97": [
            {
              "name": "Justin Moed",
              "party": "Democratic"
            },
            {
              "name": "Mark Renholzberger",
              "party": "Libertarian"
            }
          ],
          "State House District 98": [
            {
              "name": "Robin Shackleford",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 99": [
            {
              "name": "Vanessa Summers",
              "party": "Democratic",
              "unopposed": true
            }
          ],
          "State House District 100": [
            {
              "name": "Blake Johnson",
              "party": "Democratic",
              "unopposed": true
            }
          ]
        },
        "county": {
          "Sheriff": [
            {
              "name": "Kelvis Williams",
              "party": "Democratic"
            },
            {
              "name": "Tom Vaughn",
              "party": "Republican"
            }
          ],
          "Prosecutor": [
            {
              "name": "Ryan Mears",
              "party": "Democratic",
              "incumbent": true
            },
            {
              "name": "Philip Foust",
              "party": "Republican"
            }
          ],
          "Circuit Court Clerk": [
            {
              "name": "Kate Sweeney Bell",
              "party": "Democratic",
              "incumbent": true
            },
            {
              "name": "Robbin Stewart",
              "party": "Republican"
            }
          ],
          "Assessor": [
            {
              "name": "Joseph P. O'Connor",
              "party": "Democratic",
              "incumbent": true,
              "unopposed": true
            }
          ],
          "Auditor": [
            {
              "name": "Myla Eldridge",
              "party": "Democratic",
              "incumbent": true,
              "unopposed": true
            }
          ],
          "Recorder": [
            {
              "name": "Faith James Kimbrough",
              "party": "Democratic",
              "incumbent": true,
              "unopposed": true
            }
          ],
          "Perry Township Small Claims Judge": [
            {
              "name": "Cheryl Rivera",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Jami R. Sayeed",
              "party": "Democratic"
            }
          ]
        }
      },
      "referendums": [],
      "voter_questions": [
        {
          "title": "Public Question 1 - Right to Bail",
          "question": "Provide for the denial of bail when the accused is found to pose a substantial risk to another person (Public Question 1)",
          "type": "Statewide",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Public Question 2 - Judge Residence",
          "question": "Require city and town court judges to reside in the county where the court is located or the bordering county closest to the court (Public Question 2)",
          "type": "Statewide",
          "year": 2026,
          "status": "On ballot"
        }
      ]
    },
    "Boone": {
      "name": "Boone County",
      "zip_codes": [
        "46001",
        "46011",
        "46012",
        "46013",
        "46030",
        "46032",
        "46033",
        "46034",
        "46035",
        "46036",
        "46037",
        "46038",
        "46040",
        "46041",
        "46044",
        "46045",
        "46048",
        "46049",
        "46050",
        "46051",
        "46052",
        "46055",
        "46056",
        "46057",
        "46058",
        "46060",
        "46062",
        "46064",
        "46065",
        "46069",
        "46070",
        "46071",
        "46072",
        "46074",
        "46075",
        "46076",
        "46077",
        "46082",
        "46085"
      ],
      "candidates": {
        "federal": {
          "US House District 4": [
            {
              "name": "Jim Baird",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Drew Cox",
              "party": "Democratic"
            }
          ]
        },
        "state": {
          "Secretary of State": [
            {
              "name": "Max Engling",
              "party": "Republican"
            },
            {
              "name": "Beau Bayh",
              "party": "Democratic"
            },
            {
              "name": "Lauri A. Shillings",
              "party": "Libertarian"
            },
            {
              "name": "Greg Ballard",
              "party": "Lincoln"
            }
          ],
          "State Comptroller": [
            {
              "name": "Elise Nieshalla",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Jessica Bailey",
              "party": "Democratic"
            },
            {
              "name": "John Schick",
              "party": "Libertarian"
            }
          ],
          "Treasurer of State": [
            {
              "name": "Daniel Elliott",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Coumba Kebe",
              "party": "Democratic"
            }
          ],
          "State Senate District 29": [
            {
              "name": "John Ruckelshaus",
              "party": "Republican"
            },
            {
              "name": "Kristina Moorhead",
              "party": "Democratic"
            }
          ],
          "State House District 24": [
            {
              "name": "Hunter Smith",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Racheal Bleicher",
              "party": "Democratic"
            }
          ],
          "State House District 25": [
            {
              "name": "Becky Cash",
              "party": "Republican",
              "incumbent": true
            },
            {
              "name": "Tiffany Stoner",
              "party": "Democratic"
            }
          ],
          "State House District 28": [
            {
              "name": "Jeffrey A. Thompson",
              "party": "Republican"
            },
            {
              "name": "Karen Whitney",
              "party": "Democratic"
            }
          ],
          "State House District 41": [
            {
              "name": "Mark Genda",
              "party": "Republican"
            },
            {
              "name": "Jackson T. Hayes",
              "party": "Democratic"
            }
          ]
        },
        "county": {
          "Commissioner District 1": [
            {
              "name": "Jason Alan Plunkett",
              "party": "Republican"
            },
            {
              "name": "Robert D. (Bob) Brennan",
              "party": "Democratic"
            }
          ],
          "Council District 1": [
            {
              "name": "Jennifer J. Hostetter",
              "party": "Republican"
            },
            {
              "name": "Alyson Bray",
              "party": "Democratic"
            }
          ],
          "Council District 2": [
            {
              "name": "Gretchen Smith",
              "party": "Republican"
            },
            {
              "name": "Kevin W. Prather",
              "party": "Democratic"
            }
          ],
          "Council District 3": [
            {
              "name": "Kevin Van Horn",
              "party": "Republican"
            },
            {
              "name": "Geoffrey (Geoff) Lee",
              "party": "Democratic"
            }
          ],
          "Council District 4": [
            {
              "name": "Craig Justin Melton",
              "party": "Republican"
            },
            {
              "name": "Javier Morell",
              "party": "Democratic"
            }
          ],
          "Sheriff": [
            {
              "name": "Anthony (Tony) Harris",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Prosecutor": [
            {
              "name": "Kent T. Eastwood",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Circuit Court Clerk": [
            {
              "name": "Lisa L. Bruder",
              "party": "Republican"
            },
            {
              "name": "Monica Leigh White",
              "party": "Democratic"
            }
          ],
          "Assessor": [
            {
              "name": "Jennifer Lasley",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Surveyor": [
            {
              "name": "Carol Cunningham",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 1": [
            {
              "name": "Matthew C. Kincaid",
              "party": "Republican",
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 2": [
            {
              "name": "Thomas Kenneth (T.K.) Morris",
              "party": "Republican",
              "unopposed": true
            }
          ]
        }
      },
      "referendums": [
        {
          "title": "Zionsville Schools Referendum",
          "question": "School referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Sheridan Schools Referendum",
          "question": "School referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "City of Lebanon Public Question",
          "question": "City public question (question text not captured in source)",
          "type": "Municipal",
          "year": 2026,
          "status": "On ballot"
        }
      ],
      "voter_questions": [
        {
          "title": "Public Question 1 - Right to Bail",
          "question": "Provide for the denial of bail when the accused is found to pose a substantial risk to another person (Public Question 1)",
          "type": "Statewide",
          "year": 2026,
          "status": "On ballot"
        },
        {
          "title": "Public Question 2 - Judge Residence",
          "question": "Require city and town court judges to reside in the county where the court is located or the bordering county closest to the court (Public Question 2)",
          "type": "Statewide",
          "year": 2026,
          "status": "On ballot"
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
    "46032": "Hamilton",
    "46033": "Hamilton",
    "46034": "Hamilton",
    "46035": "Hamilton",
    "46036": "Hamilton",
    "46037": "Hamilton",
    "46038": "Hamilton",
    "46040": "Hamilton",
    "46041": "Boone",
    "46044": "Hamilton",
    "46045": "Boone",
    "46048": "Hamilton",
    "46049": "Hamilton",
    "46050": "Hamilton",
    "46051": "Hamilton",
    "46052": "Hamilton",
    "46055": "Hamilton",
    "46056": "Hamilton",
    "46057": "Hamilton",
    "46058": "Boone",
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
};
// Get county by zip code
function getCountyByZipCode(zipCode) {
    if (!electionData) return null;

    const countyName = electionData.zip_code_map[zipCode];
    if (!countyName) return null;

    return electionData.counties[countyName];
}

// Get county by name
function getCountyByName(countyName) {
    if (!electionData) return null;

    return electionData.counties[countyName];
}

// Get all county names
function getAllCountyNames() {
    if (!electionData) return [];

    return Object.keys(electionData.counties).sort();
}

// Get metadata
function getMetadata() {
    if (!electionData) return null;
    return electionData.metadata;
}
