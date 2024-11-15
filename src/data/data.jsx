const data = [
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
  {
    name: "Beautiful Landscape",
    category: "Nature",
    description: "A scenic view of mountains during sunrise.",
    images: [
      {
        url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape with sunrise",
      },
      {
        url: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape close-up",
      },
      {
        url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Mountain landscape at dawn",
      },
    ],
    reactions: {
      likes: 120,
      loves: 85,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "John Doe",
        comment: "Absolutely stunning view!",
        adminReply: "Thank you, John!",
        likes: 20,
      },
      {
        reviewerName: "Jane Smith",
        comment: "Perfect lighting.",
        adminReply: "Thanks, Jane!",
        likes: 15,
      },
    ],
  },
  {
    name: "City Skyline",
    category: "Urban",
    description: "A vibrant city skyline at night.",
    images: [
      {
        url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline at night",
      },
      {
        url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline close-up",
      },
      {
        url: "https://images.pexels.com/photos/1316347/pexels-photo-1316347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "City skyline with reflection",
      },
    ],
    reactions: {
      likes: 98,
      loves: 72,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Alice Johnson",
        comment: "Love the contrast!",
        adminReply: "Thank you, Alice!",
        likes: 18,
      },
      {
        reviewerName: "Robert Brown",
        comment: "Beautiful capture.",
        adminReply: "Thanks, Robert!",
        likes: 10,
      },
    ],
  },
  {
    name: "Desert Dunes",
    category: "Nature",
    description: "Golden sand dunes in the desert.",
    images: [
      {
        url: "https://images.pexels.com/photos/442767/pexels-photo-442767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Golden sand dunes",
      },
      {
        url: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes close-up",
      },
      {
        url: "https://images.pexels.com/photos/1054219/pexels-photo-1054219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "Sand dunes at sunset",
      },
    ],
    reactions: {
      likes: 85,
      loves: 50,
      unlikes: 0,
    },
    reviews: [
      {
        reviewerName: "Chris Lee",
        comment: "Such beautiful textures!",
        adminReply: "Thanks, Chris!",
        likes: 16,
      },
      {
        reviewerName: "Nina Patel",
        comment: "The color is amazing.",
        adminReply: "Appreciate it, Nina!",
        likes: 14,
      },
    ],
  },
].map((item, index) => ({ id: index + 1, ...item }));

export default data;
