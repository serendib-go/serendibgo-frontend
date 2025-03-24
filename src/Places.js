const places = [
    {
      id: 1,
      name: "Colombo Lotus Tower",
      latitude: 6.9271,
      longitude: 79.8612,
      category: "Landmark",
      description: "The tallest self-supported structure in South Asia, offering a panoramic view of Colombo.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Colombo_Lotus_Tower.jpg"
    },
    {
      id: 2,
      name: "Sigiriya Rock Fortress",
      latitude: 7.9569,
      longitude: 80.7593,
      category: "Historical",
      description: "A UNESCO World Heritage Site, known for its ancient rock fortress and stunning frescoes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sigiriya_Mountain_2.jpg"
    },
    {
      id: 3,
      name: "Galle Fort",
      latitude: 6.026,
      longitude: 80.217,
      category: "Cultural",
      description: "A well-preserved colonial-era fort built by the Portuguese and later fortified by the Dutch.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Galle_Fort_and_Harbour.jpg"
    },
    {
      id: 4,
      name: "Kandy Temple of the Tooth",
      latitude: 7.2946,
      longitude: 80.6337,
      category: "Religious",
      description: "A Buddhist temple in Kandy, housing the relic of the tooth of the Buddha.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kandy_Temple_of_the_Tooth.jpg"
    },
    {
      id: 5,
      name: "Nuwara Eliya",
      latitude: 6.9483,
      longitude: 80.7905,
      category: "Nature",
      description: "A beautiful hill station with tea plantations, waterfalls, and pleasant weather.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Nuwara_Eliya.jpg"
    },
    {
      id: 6,
      name: "Adam's Peak",
      latitude: 6.7628,
      longitude: 80.3887,
      category: "Nature",
      description: "A mountain famous for its religious significance and stunning sunrise views.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Adam%27s_Peak_Above_Clouds.jpg"
    },
    {
      id: 7,
      name: "Ella Rock",
      latitude: 6.8713,
      longitude: 81.0658,
      category: "Nature",
      description: "A famous hiking destination offering scenic views of the surrounding hills and valleys.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Ella_Rock.jpg"
    },
    {
      id: 8,
      name: "Yala National Park",
      latitude: 6.4117,
      longitude: 81.4995,
      category: "Wildlife",
      description: "Sri Lanka's most visited national park, home to leopards, elephants, and diverse wildlife.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Yala_National_Park.jpg"
    },
    {
      id: 9,
      name: "Polonnaruwa Ancient City",
      latitude: 7.9333,
      longitude: 81.0000,
      category: "Historical",
      description: "A UNESCO World Heritage Site known for its ancient ruins and historical monuments.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Polonnaruwa_Ancient_City.jpg"
    },
    {
      id: 10,
      name: "Dambulla Cave Temple",
      latitude: 7.8611,
      longitude: 80.6467,
      category: "Religious",
      description: "A series of caves filled with statues and paintings depicting Buddha's life.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dambulla_rock_temple.jpg"
    },
    {
      id: 11,
      name: "Mirissa Beach",
      latitude: 5.9465,
      longitude: 80.4474,
      category: "Nature",
      description: "A beautiful beach known for its clear waters and whale-watching opportunities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Mirissa_Beach.jpg"
    },
    {
      id: 12,
      name: "Unawatuna Beach",
      latitude: 6.0319,
      longitude: 80.2234,
      category: "Nature",
      description: "A popular beach destination known for its golden sands and crystal-clear waters.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Unawatuna_Beach.jpg"
    },
    {
      id: 13,
      name: "Horton Plains National Park",
      latitude: 6.7917,
      longitude: 80.9833,
      category: "Nature",
      description: "A beautiful national park with stunning views, including the famous World's End cliff.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Horton_Plains.jpg"
    },
    {
      id: 14,
      name: "Trincomalee",
      latitude: 8.5686,
      longitude: 81.2248,
      category: "Beach",
      description: "A coastal city known for its beautiful beaches and historical sites.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Trincomalee.jpg"
    },
    {
      id: 15,
      name: "Anuradhapura Ancient City",
      latitude: 8.3433,
      longitude: 80.4039,
      category: "Historical",
      description: "One of the ancient capitals of Sri Lanka, home to ruins, stupas, and sacred trees.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Anuradhapura_Sri_Lanka.jpg"
    },
    {
      id: 16,
      name: "Nuwara Eliya Victoria Park",
      latitude: 6.9375,
      longitude: 80.7817,
      category: "Nature",
      description: "A beautiful park offering great views of Nuwara Eliya and nearby tea estates.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Victoria_Park_%28Nuwara_Eliya%29.jpg"
    },
    {
      id: 17,
      name: "Bentota Beach",
      latitude: 6.4272,
      longitude: 79.9979,
      category: "Nature",
      description: "A popular beach with golden sand and a peaceful environment for relaxation.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Bentota_Beach.jpg"
    },
    {
      id: 18,
      name: "Kataragama Temple",
      latitude: 9.3057,
      longitude: 81.3656,
      category: "Religious",
      description: "A sacred site for Buddhists, Hindus, and other religious communities in Sri Lanka.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Kataragama_Temple.jpg"
    },
    {
      id: 19,
      name: "Sri Pada (Adam's Peak)",
      latitude: 6.7628,
      longitude: 80.3887,
      category: "Nature",
      description: "A sacred mountain in Sri Lanka, visited by pilgrims of all religions.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Sri_Pada.jpg"
    },
    {
      id: 20,
      name: "Weligama Bay",
      latitude: 5.9869,
      longitude: 80.2964,
      category: "Nature",
      description: "A beautiful bay, known for its surfing opportunities and golden sandy beach.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Weligama_Bay.jpg"
    },
    {
      id: 21,
      name: "Batticaloa Lagoon",
      latitude: 7.7108,
      longitude: 81.7010,
      category: "Nature",
      description: "A picturesque lagoon in the eastern part of Sri Lanka, offering bird-watching opportunities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Batticaloa_Lagoon.jpg"
    },
    {
      id: 22,
      name: "Sri Dalada Maligawa",
      latitude: 7.2906,
      longitude: 80.6338,
      category: "Religious",
      description: "The Temple of the Sacred Tooth Relic in Kandy, one of the holiest sites in Buddhism.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Sri_Dalada_Maligawa.jpg"
    },
    {
      id: 23,
      name: "Kandy Lake",
      latitude: 7.2946,
      longitude: 80.6337,
      category: "Nature",
      description: "A scenic lake located in the heart of Kandy, surrounded by hills and gardens.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Kandy_Lake.jpg"
    },
    {
      id: 24,
      name: "Dambulla Golden Temple",
      latitude: 7.8612,
      longitude: 80.6477,
      category: "Religious",
      description: "A Buddhist temple complex with golden statues of the Buddha and other deities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Dambulla_Golden_Temple.jpg"
    },
    {
      id: 25,
      name: "Arugam Bay",
      latitude: 6.8227,
      longitude: 81.8271,
      category: "Beach",
      description: "A renowned surfing destination with calm waters and beautiful beaches.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Arugam_Bay.jpg"
    },
    // Add the remaining places from 26 to 50...
  ];
  
  export default places;
  