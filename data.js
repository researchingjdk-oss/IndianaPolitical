// Indiana Election Data (2026 General Election) - Hamilton, Marion, and Boone Counties Only
const electionData = {
  "metadata": {
    "state": "Indiana",
    "election": "2026 General Election (November 3, 2026)",
    "last_updated": "2026-11-07",
    "results_status": "Unofficial - county and state canvass/certification pending; close races (e.g. HD-88, HD-78, SD-45) may still change",
    "data_source": "Hamilton: Hamilton County Election Office via LarryInFishers; Marion: WFYI, Mirror Indy; Boone: Boone County Election Summary Report (11/3/2026); statewide/legislative winners: MultiState, Indiana Capital Chronicle",
    "description": "2026 general election candidates and results for Hamilton, Marion, and Boone Counties in Indiana",
    "total_counties": 3,
    "notes": [
      "No US Senate or Governor race was on Indiana's 2026 ballot.",
      "'winner' is the overall race winner (district- or state-wide); 'votes_in_county' / 'percent_in_county' are that county's portion only. Marion County vote totals were not captured.",
      "'incumbent' is set only where a source states it or the incumbent lost; absence does not mean the candidate was a challenger.",
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
              "incumbent": true,
              "votes_in_county": 65570,
              "percent_in_county": 44.54
            },
            {
              "name": "J.D. Ford",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 81500,
              "percent_in_county": 55.36
            }
          ]
        },
        "state": {
          "Secretary of State": [
            {
              "name": "Max Engling",
              "party": "Republican",
              "votes_in_county": 58277,
              "percent_in_county": 39.2
            },
            {
              "name": "Beau Bayh",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 80141,
              "percent_in_county": 53.9
            },
            {
              "name": "Lauri A. Shillings",
              "party": "Libertarian",
              "votes_in_county": 2306,
              "percent_in_county": 1.55
            },
            {
              "name": "Greg Ballard",
              "party": "Lincoln",
              "votes_in_county": 7924,
              "percent_in_county": 5.33
            }
          ],
          "State Comptroller": [
            {
              "name": "Elise Nieshalla",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 67186,
              "percent_in_county": 45.95
            },
            {
              "name": "Jessica Bailey",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 75183,
              "percent_in_county": 51.42
            },
            {
              "name": "John Schick",
              "party": "Libertarian",
              "votes_in_county": 3856,
              "percent_in_county": 2.64
            }
          ],
          "Treasurer of State": [
            {
              "name": "Daniel Elliott",
              "party": "Republican",
              "incumbent": true,
              "winner": true,
              "votes_in_county": 71493,
              "percent_in_county": 49.04
            },
            {
              "name": "Coumba Kebe",
              "party": "Democratic",
              "votes_in_county": 74281,
              "percent_in_county": 50.96
            }
          ],
          "State Senate District 21": [
            {
              "name": "Tracey Powell",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 13926,
              "percent_in_county": 49.77
            },
            {
              "name": "Kirsten Root",
              "party": "Democratic",
              "votes_in_county": 14052,
              "percent_in_county": 50.23
            }
          ],
          "State Senate District 25": [
            {
              "name": "Mike Gaskill",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 1396,
              "percent_in_county": 73.36
            },
            {
              "name": "Tamie Dixon-Tatum",
              "party": "Democratic",
              "votes_in_county": 507,
              "percent_in_county": 26.64
            }
          ],
          "State Senate District 29": [
            {
              "name": "John Ruckelshaus",
              "party": "Republican",
              "votes_in_county": 8175,
              "percent_in_county": 43.05
            },
            {
              "name": "Kristina Moorhead",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 10816,
              "percent_in_county": 56.95
            }
          ],
          "State Senate District 31": [
            {
              "name": "Juanita Albright",
              "party": "Republican",
              "votes_in_county": 17517,
              "percent_in_county": 42.66
            },
            {
              "name": "Kerry J. Forestal",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 23549,
              "percent_in_county": 57.34
            }
          ],
          "State House District 24": [
            {
              "name": "Hunter Smith",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 14414,
              "percent_in_county": 46.23
            },
            {
              "name": "Racheal Bleicher",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 16766,
              "percent_in_county": 53.77
            }
          ],
          "State House District 29": [
            {
              "name": "Alaina Shonkwiler",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 14623,
              "percent_in_county": 52.39
            },
            {
              "name": "Devon Wellington",
              "party": "Democratic",
              "votes_in_county": 13289,
              "percent_in_county": 47.61
            }
          ],
          "State House District 32": [
            {
              "name": "Paul G. Nix",
              "party": "Republican",
              "votes_in_county": 9337,
              "percent_in_county": 38.89
            },
            {
              "name": "Victoria Garcia Wilburn",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 14672,
              "percent_in_county": 61.11
            }
          ],
          "State House District 37": [
            {
              "name": "Todd Huston",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 12532,
              "percent_in_county": 48.48
            },
            {
              "name": "Lauren S. Cole",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 13318,
              "percent_in_county": 51.52
            }
          ],
          "State House District 39": [
            {
              "name": "Danny Lopez",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 13884,
              "percent_in_county": 45.89
            },
            {
              "name": "Lindsay Gramlich",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 16369,
              "percent_in_county": 54.11
            }
          ],
          "State House District 88": [
            {
              "name": "Chris Jeter",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 3854,
              "percent_in_county": 46.93
            },
            {
              "name": "Stephanie Jo Yocum",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 4359,
              "percent_in_county": 53.07
            }
          ]
        },
        "county": {
          "Commissioner District 1": [
            {
              "name": "Christine Altman",
              "party": "Republican",
              "incumbent": true,
              "winner": true,
              "votes_in_county": 72549,
              "percent_in_county": 50.11
            },
            {
              "name": "Ti'Gre McNear",
              "party": "Democratic",
              "votes_in_county": 72226,
              "percent_in_county": 49.89
            }
          ],
          "Council District 1": [
            {
              "name": "Tim Griffin",
              "party": "Republican",
              "votes_in_county": 17164,
              "percent_in_county": 46.83
            },
            {
              "name": "Christopher Daniel",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 19487,
              "percent_in_county": 53.17
            }
          ],
          "Council District 2": [
            {
              "name": "Amy Elizabeth Massillamany",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 14990,
              "percent_in_county": 43.83
            },
            {
              "name": "Nathan Bullock",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 19213,
              "percent_in_county": 56.17
            }
          ],
          "Council District 3": [
            {
              "name": "Mark F. Hall",
              "party": "Republican",
              "incumbent": true,
              "winner": true,
              "votes_in_county": 19272,
              "percent_in_county": 55.47
            },
            {
              "name": "Doug May",
              "party": "Democratic",
              "votes_in_county": 15474,
              "percent_in_county": 44.53
            }
          ],
          "Council District 4": [
            {
              "name": "Ken Alexander",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 19384,
              "percent_in_county": 48.67
            },
            {
              "name": "Jason E. Frank",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 20443,
              "percent_in_county": 51.33
            }
          ],
          "Sheriff": [
            {
              "name": "Dustin K. Dixon",
              "party": "Republican",
              "votes_in_county": 71723,
              "percent_in_county": 49.06
            },
            {
              "name": "Charles Hollowell",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 74466,
              "percent_in_county": 50.94
            }
          ],
          "Prosecutor": [
            {
              "name": "Josh Kocher",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 89007,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Circuit Court Clerk": [
            {
              "name": "Beth Sheller",
              "party": "Republican",
              "votes_in_county": 70648,
              "percent_in_county": 48.73
            },
            {
              "name": "Alexandra E. Wilson",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 74325,
              "percent_in_county": 51.27
            }
          ],
          "Assessor": [
            {
              "name": "Kevin W. Poore",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 88942,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Recorder": [
            {
              "name": "Trini Beaver",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 87957,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Coroner": [
            {
              "name": "Jeff D. Jellison",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 90435,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 3": [
            {
              "name": "Chris Evans",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 89371,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 4": [
            {
              "name": "Angela Brown Swenson",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 89843,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 5": [
            {
              "name": "David K. Najjar",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 88659,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 8": [
            {
              "name": "Danica L. Eyler",
              "party": "Republican",
              "votes_in_county": 68664,
              "percent_in_county": 47.53
            },
            {
              "name": "Emily L. Angel Shaw",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 75801,
              "percent_in_county": 52.47
            }
          ],
          "Superior Court Judge No. 9": [
            {
              "name": "Paul C. Sweeney",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 89165,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ]
        }
      },
      "referendums": [
        {
          "title": "Carmel Clay Schools Referendum",
          "question": "School funding referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 24669,
          "yes_percent": 58.07,
          "no_votes_in_county": 17812,
          "no_percent": 41.93
        },
        {
          "title": "Hamilton Southeastern Schools Referendum",
          "question": "School funding referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 25624,
          "yes_percent": 58.33,
          "no_votes_in_county": 18309,
          "no_percent": 41.67
        },
        {
          "title": "Noblesville Schools Referendum",
          "question": "School funding referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 15211,
          "yes_percent": 57.18,
          "no_votes_in_county": 11393,
          "no_percent": 42.82
        },
        {
          "title": "Westfield Washington Schools Referendum",
          "question": "School funding referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 14542,
          "yes_percent": 56.01,
          "no_votes_in_county": 11423,
          "no_percent": 43.99
        },
        {
          "title": "Sheridan Schools Referendum",
          "question": "School funding referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "Failed",
          "yes_votes_in_county": 931,
          "yes_percent": 47.67,
          "no_votes_in_county": 1022,
          "no_percent": 52.33
        }
      ],
      "voter_questions": [
        {
          "title": "Public Question 1 - Right to Bail",
          "question": "Provide for the denial of bail when the accused is found to pose a substantial risk to another person (Public Question 1)",
          "type": "Statewide",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 82243,
          "yes_percent": 57.9,
          "no_votes_in_county": 59798,
          "no_percent": 42.1
        },
        {
          "title": "Public Question 2 - Judge Residence",
          "question": "Require city and town court judges to reside in the county where the court is located or the bordering county closest to the court (Public Question 2)",
          "type": "Statewide",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 88184,
          "yes_percent": 61.83,
          "no_votes_in_county": 54448,
          "no_percent": 38.17
        }
      ],
      "turnout": {
        "registered_voters": 290805,
        "ballots_cast": 150804,
        "percent": 51.86,
        "precincts_reporting": "234 of 234"
      }
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
              "incumbent": true,
              "winner": true
            }
          ],
          "US House District 7": [
            {
              "name": "André Carson",
              "party": "Democratic",
              "incumbent": true,
              "winner": true
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
              "party": "Democratic",
              "winner": true
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
              "party": "Democratic",
              "winner": true
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
              "incumbent": true,
              "winner": true
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
              "party": "Democratic",
              "winner": true
            }
          ],
          "State Senate District 31": [
            {
              "name": "Juanita Albright",
              "party": "Republican"
            },
            {
              "name": "Kerry J. Forestal",
              "party": "Democratic",
              "winner": true
            }
          ],
          "State House District 86": [
            {
              "name": "Glenn Bill",
              "party": "Republican"
            },
            {
              "name": "Ed DeLaney",
              "party": "Democratic",
              "winner": true
            }
          ],
          "State House District 87": [
            {
              "name": "Carey Hamilton",
              "party": "Democratic",
              "winner": true,
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
              "party": "Democratic",
              "winner": true
            }
          ],
          "State House District 89": [
            {
              "name": "Mitch Gore",
              "party": "Democratic",
              "winner": true
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
              "party": "Democratic",
              "winner": true
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
              "party": "Democratic",
              "winner": true
            }
          ],
          "State House District 92": [
            {
              "name": "Reneé Pack",
              "party": "Democratic",
              "winner": true,
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
              "party": "Democratic",
              "winner": true
            }
          ],
          "State House District 94": [
            {
              "name": "Cherrish Pryor",
              "party": "Democratic",
              "winner": true,
              "unopposed": true
            }
          ],
          "State House District 95": [
            {
              "name": "John Bartlett",
              "party": "Democratic",
              "winner": true,
              "unopposed": true
            }
          ],
          "State House District 96": [
            {
              "name": "Gregory Porter",
              "party": "Democratic",
              "winner": true,
              "unopposed": true
            }
          ],
          "State House District 97": [
            {
              "name": "Justin Moed",
              "party": "Democratic",
              "winner": true
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
              "winner": true,
              "unopposed": true
            }
          ],
          "State House District 99": [
            {
              "name": "Vanessa Summers",
              "party": "Democratic",
              "winner": true,
              "unopposed": true
            }
          ],
          "State House District 100": [
            {
              "name": "Blake Johnson",
              "party": "Democratic",
              "winner": true,
              "unopposed": true
            }
          ]
        },
        "county": {
          "Sheriff": [
            {
              "name": "Kelvis Williams",
              "party": "Democratic",
              "winner": true
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
              "incumbent": true,
              "winner": true
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
              "incumbent": true,
              "winner": true
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
              "winner": true,
              "unopposed": true
            }
          ],
          "Auditor": [
            {
              "name": "Myla Eldridge",
              "party": "Democratic",
              "incumbent": true,
              "winner": true,
              "unopposed": true
            }
          ],
          "Recorder": [
            {
              "name": "Faith James Kimbrough",
              "party": "Democratic",
              "incumbent": true,
              "winner": true,
              "unopposed": true
            }
          ],
          "Perry Township Small Claims Judge": [
            {
              "name": "Cheryl Rivera",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 13232,
              "percent_in_county": 49.69
            },
            {
              "name": "Jami R. Sayeed",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 13395,
              "percent_in_county": 50.31
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
          "status": "Passed"
        },
        {
          "title": "Public Question 2 - Judge Residence",
          "question": "Require city and town court judges to reside in the county where the court is located or the bordering county closest to the court (Public Question 2)",
          "type": "Statewide",
          "year": 2026,
          "status": "Passed"
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
              "incumbent": true,
              "votes_in_county": 13742,
              "percent_in_county": 48.86
            },
            {
              "name": "Drew Cox",
              "party": "Democratic",
              "votes_in_county": 14320,
              "percent_in_county": 50.91
            }
          ]
        },
        "state": {
          "Secretary of State": [
            {
              "name": "Max Engling",
              "party": "Republican",
              "votes_in_county": 11260,
              "percent_in_county": 39.44
            },
            {
              "name": "Beau Bayh",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 14732,
              "percent_in_county": 51.6
            },
            {
              "name": "Lauri A. Shillings",
              "party": "Libertarian",
              "votes_in_county": 576,
              "percent_in_county": 2.02
            },
            {
              "name": "Greg Ballard",
              "party": "Lincoln",
              "votes_in_county": 1972,
              "percent_in_county": 6.91
            }
          ],
          "State Comptroller": [
            {
              "name": "Elise Nieshalla",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 13767,
              "percent_in_county": 49.01
            },
            {
              "name": "Jessica Bailey",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 13449,
              "percent_in_county": 47.87
            },
            {
              "name": "John Schick",
              "party": "Libertarian",
              "votes_in_county": 876,
              "percent_in_county": 3.12
            }
          ],
          "Treasurer of State": [
            {
              "name": "Daniel Elliott",
              "party": "Republican",
              "incumbent": true,
              "winner": true,
              "votes_in_county": 14504,
              "percent_in_county": 51.87
            },
            {
              "name": "Coumba Kebe",
              "party": "Democratic",
              "votes_in_county": 13460,
              "percent_in_county": 48.13
            }
          ],
          "State Senate District 29": [
            {
              "name": "John Ruckelshaus",
              "party": "Republican",
              "votes_in_county": 5491,
              "percent_in_county": 45.66
            },
            {
              "name": "Kristina Moorhead",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 6534,
              "percent_in_county": 54.34
            }
          ],
          "State House District 24": [
            {
              "name": "Hunter Smith",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 1076,
              "percent_in_county": 59.15
            },
            {
              "name": "Racheal Bleicher",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 743,
              "percent_in_county": 40.85
            }
          ],
          "State House District 25": [
            {
              "name": "Becky Cash",
              "party": "Republican",
              "incumbent": true,
              "votes_in_county": 7863,
              "percent_in_county": 41.58
            },
            {
              "name": "Tiffany Stoner",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 11049,
              "percent_in_county": 58.42
            }
          ],
          "State House District 28": [
            {
              "name": "Jeffrey A. Thompson",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 719,
              "percent_in_county": 71.4
            },
            {
              "name": "Karen Whitney",
              "party": "Democratic",
              "votes_in_county": 288,
              "percent_in_county": 28.6
            }
          ],
          "State House District 41": [
            {
              "name": "Mark Genda",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 3957,
              "percent_in_county": 61.09
            },
            {
              "name": "Jackson T. Hayes",
              "party": "Democratic",
              "votes_in_county": 2520,
              "percent_in_county": 38.91
            }
          ]
        },
        "county": {
          "Commissioner District 1": [
            {
              "name": "Jason Alan Plunkett",
              "party": "Republican",
              "votes_in_county": 13622,
              "percent_in_county": 48.51
            },
            {
              "name": "Robert D. (Bob) Brennan",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 14456,
              "percent_in_county": 51.49
            }
          ],
          "Council District 1": [
            {
              "name": "Jennifer J. Hostetter",
              "party": "Republican",
              "votes_in_county": 4087,
              "percent_in_county": 46.0
            },
            {
              "name": "Alyson Bray",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 4798,
              "percent_in_county": 54.0
            }
          ],
          "Council District 2": [
            {
              "name": "Gretchen Smith",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 3782,
              "percent_in_county": 61.11
            },
            {
              "name": "Kevin W. Prather",
              "party": "Democratic",
              "votes_in_county": 2407,
              "percent_in_county": 38.89
            }
          ],
          "Council District 3": [
            {
              "name": "Kevin Van Horn",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 2768,
              "percent_in_county": 58.27
            },
            {
              "name": "Geoffrey (Geoff) Lee",
              "party": "Democratic",
              "votes_in_county": 1982,
              "percent_in_county": 41.73
            }
          ],
          "Council District 4": [
            {
              "name": "Craig Justin Melton",
              "party": "Republican",
              "votes_in_county": 3602,
              "percent_in_county": 44.1
            },
            {
              "name": "Javier Morell",
              "party": "Democratic",
              "winner": true,
              "votes_in_county": 4566,
              "percent_in_county": 55.9
            }
          ],
          "Sheriff": [
            {
              "name": "Anthony (Tony) Harris",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 18400,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Prosecutor": [
            {
              "name": "Kent T. Eastwood",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 17953,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Circuit Court Clerk": [
            {
              "name": "Lisa L. Bruder",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 14399,
              "percent_in_county": 52.08
            },
            {
              "name": "Monica Leigh White",
              "party": "Democratic",
              "votes_in_county": 13247,
              "percent_in_county": 47.92
            }
          ],
          "Assessor": [
            {
              "name": "Jennifer Lasley",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 17943,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Surveyor": [
            {
              "name": "Carol Cunningham",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 18184,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 1": [
            {
              "name": "Matthew C. Kincaid",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 18467,
              "percent_in_county": 100.0,
              "unopposed": true
            }
          ],
          "Superior Court Judge No. 2": [
            {
              "name": "Thomas Kenneth (T.K.) Morris",
              "party": "Republican",
              "winner": true,
              "votes_in_county": 18103,
              "percent_in_county": 100.0,
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
          "status": "Passed",
          "yes_votes_in_county": 11054,
          "yes_percent": 69.08,
          "no_votes_in_county": 4947,
          "no_percent": 30.92
        },
        {
          "title": "Sheridan Schools Referendum",
          "question": "School referendum (question text not captured in source)",
          "type": "School",
          "year": 2026,
          "status": "Failed",
          "yes_votes_in_county": 173,
          "yes_percent": 42.3,
          "no_votes_in_county": 236,
          "no_percent": 57.7
        },
        {
          "title": "City of Lebanon Public Question",
          "question": "City public question (question text not captured in source)",
          "type": "Municipal",
          "year": 2026,
          "status": "Failed",
          "yes_votes_in_county": 1763,
          "yes_percent": 39.69,
          "no_votes_in_county": 2679,
          "no_percent": 60.31
        }
      ],
      "voter_questions": [
        {
          "title": "Public Question 1 - Right to Bail",
          "question": "Provide for the denial of bail when the accused is found to pose a substantial risk to another person (Public Question 1)",
          "type": "Statewide",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 15616,
          "yes_percent": 58.02,
          "no_votes_in_county": 11298,
          "no_percent": 41.98
        },
        {
          "title": "Public Question 2 - Judge Residence",
          "question": "Require city and town court judges to reside in the county where the court is located or the bordering county closest to the court (Public Question 2)",
          "type": "Statewide",
          "year": 2026,
          "status": "Passed",
          "yes_votes_in_county": 16195,
          "yes_percent": 61.15,
          "no_votes_in_county": 10288,
          "no_percent": 38.85
        }
      ],
      "turnout": {
        "registered_voters": 60377,
        "ballots_cast": 29015,
        "percent": 48.06,
        "precincts_reporting": "53 of 53"
      }
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
