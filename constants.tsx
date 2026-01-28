import React from 'react';
import { Leaf, Recycle, Heart, Droplet } from 'lucide-react';
import { Product, TeamMember } from './types.ts';

export const COLORS = {
  COFFEE_BROWN: '#3E2723',
  SAND_BEIGE: '#F5F5DC',
  EARTHY_GREEN: '#81C784',
};

// Icons remain static
export const ICONS = {
  Handmade: <Recycle className="w-4 h-4" />,
  Sustainability: <Leaf className="w-4 h-4" />,
  Craft: <Droplet className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />
};

export const DATA = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      team: 'Team',
      products: 'Products',
      blog: 'Blog',
      contact: 'Contact'
    },
    products: [
      {
        id: '1',
        name: 'Khay The Last Drop',
        description: 'A sculptural serving piece crafted from compressed espresso grounds.',
        price: '1.600.000₫',
        image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
        tag: 'Best Seller'
      },
      {
        id: '2',
        name: 'Chậu Cây Mini Eco',
        description: 'Organic textures for your favorite succulents, moisture-wicking by nature.',
        price: '800.000₫',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800',
        tag: '100% Recycled'
      },
      {
        id: '3',
        name: 'Hộp Đựng Bút First Sip',
        description: 'Minimalist desk organization with a subtle aroma of roasted beans.',
        price: '700.000₫',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        tag: 'Sustainable'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Văn Quế Hương',
        role: 'Chief Executive Officer',
        image: 'images/team/QueHuong.jpg',
        bio: 'Responsible for managing and organizing overall project operations. Supports team members, monitors work progress, and ensures tasks are executed according to the established plan.'
      },
      {
        id: '2',
        name: 'Trần Thị Tuyết Mai',
        role: 'Product Director',
        image: 'images/team/TuyetMai.jpg',
        bio: 'Responsible for building and refining project products. Participates in monitoring implementation process, evaluating and proposing adjustments to ensure products meet user needs.'
      },
      {
        id: '3',
        name: 'Nguyễn Thị Phương Nghi',
        role: 'Marketing Director',
        image: 'images/team/PhuongNghi.jpg',
        bio: 'Responsible for developing and implementing communication activities for the project. Creates content ideas, manages communication channels and supports brand image promotion.'
      },
      {
        id: '4',
        name: 'Trần Thị Mỹ Hiền',
        role: 'Business Director',
        image: 'images/team/MyHien.jpg',
        bio: 'Responsible for market research and customer connection support. Monitors business performance and proposes improvement solutions aligned with team objectives.'
      },
      {
        id: '5',
        name: 'Lương Thị Tố Tố',
        role: 'Finance Director',
        image: 'images/team/ToTo.jpg',
        bio: 'Responsible for budget management, cost monitoring and financial planning support for the project. Ensures that revenues and expenses are controlled and used appropriately.'
      }
    ],
    blog: [
      {
        id: '1',
        title: '5 Ways to Recycle Coffee Grounds at Home',
        excerpt: 'Don\'t throw away your coffee grounds! Discover simple ways to turn them into fertilizer, body scrubs, and more.',
        date: 'Jan 24, 2024',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        content: `Coffee grounds are a versatile resource that often goes to waste. The average coffee drinker produces tons of waste annually, but this "waste" is actually a goldmine for your home and garden. Here are 5 detailed ways to reuse them:

        1. **Nutrient-Rich Fertilizer**:
        Coffee grounds are rich in nitrogen, which is a key nutrient for green growth. They also contain potassium and phosphorus. They are particularly great for acid-loving plants like blueberries, azaleas, hydrangeas, and roses. Simply sprinkle a thin layer around the base of your plants or mix them into your compost pile to give it a nitrogen boost.

        2. **Natural Body Scrub**:
        Why buy expensive scrubs when you can make a better one at home? The texture of coffee grounds is perfect for mechanical exfoliation. 
        *Recipe*: Mix 1/2 cup of used grounds with 1/4 cup of coconut oil and a tablespoon of brown sugar. Gently massage onto wet skin in circular motions to remove dead skin cells and improve circulation. The caffeine can also help tighten skin appearance!

        3. **Powerful Odor Absorber**:
        Nitrogen helps neutralize odors rather than just masking them. Dry out your used grounds completely (this is important to prevent mold) and place them in a small bowl or an old stocking. Keep it in your fridge, gym bag, or near the litter box to absorb unpleasant smells effectively.

        4. **Eco-Friendly Cleaning Scrub**:
        The coarse texture makes coffee grounds an excellent, non-toxic abrasive for cleaning tough grime off pots and pans. Sprinkle some grounds onto a scouring pad and scrub away burnt-on food. (Note: Rinse well and avoid using on porous materials that might stain).

        5. **Garden Pest Repellent**:
        Create a barrier against slugs and snails. These soft-bodied pests dislike the abrasive texture of the grounds and will often avoid crossing them to get to your precious plants. Some studies also suggest the heavy caffeine content can be a deterrent to ants.`
      },
      {
        id: '2',
        title: 'Beauty from Coffee Grounds: The Ultimate Guide',
        excerpt: 'Natural skincare secrets from coffee grounds for exfoliating, brightening, and reducing puffiness.',
        date: 'Jan 20, 2024',
        image: 'https://images.unsplash.com/photo-1515516947640-8cde5397ba0c?auto=format&fit=crop&q=80&w=800',
        content: `Your morning brew can double as your evening beauty routine. Caffeine is a superstar ingredient in many high-end skincare products because it acts as a vasoconstrictor and an antioxidant.

        **The Benefits:**
        *   **Exfoliation**: Removes dead skin cells, leaving skin smoother and brighter.
        *   **De-puffing**: Caffeine restricts blood vessels, quickly reducing inflammation and dark circles under the eyes.
        *   **Antioxidant Boost**: Fights premature aging caused by free radicals.

        **DIY Recipes to Try:**

        **1. The "Wake Up" Face Mask**
        Mix equal parts fine coffee grounds and yogurt (dairy or non-dairy). The lactic acid in yogurt gently peels while coffee stimulates blood flow. Apply to face, let sit for 10 minutes, and rinse with warm water.

        **2. Scalp Detox Scrub**
        Product buildup can weigh down hair. Before shampooing, massage a handful of wet grounds into your scalp. It lifts away residue and stimulates hair follicles effectively.

        **3. Cellulite Stimulator**
        While no cure for cellulite exists, caffeine can temporarily tighten skin. Mix grounds with warm olive oil and massage vigorously into target areas for 5 minutes before showering.

        *Precaution*: Always do a patch test first, especially if you have sensitive skin.`
      },
      {
        id: '3',
        title: 'Our Recycling Journey: From Waste to Art',
        excerpt: 'Why we chose coffee grounds as our main material? The story of our mission to reduce landfill waste.',
        date: 'Jan 15, 2024',
        image: 'https://images.unsplash.com/photo-1525648199074-ce30b561a115?auto=format&fit=crop&q=80&w=800',
        content: `It all started with a simple observation at a local corner cafe. We watched as the barista knocked the portafilter against the bin, discarding a puck of espresso grounds. Again. And again. By the end of the hour, the bin was full.

        **The Problem**
        Coffee grounds are organic, but when buried in anaerobic landfill conditions, they decompose to produce methane—a greenhouse gas roughly 80 times more potent than carbon dioxide in the short term.

        **The Eureka Moment**
        We realized that this "waste" was actually a material with incredible properties. It has a beautiful, earthy color, a granular texture perfect for binding, and a subtle, comforting aroma. But how could we stabilize it?

        **The Process**
        Our team spent six months experimenting. We tried resins (too toxic), glues (too weak), and cement (too heavy). Finally, we developed a proprietary blend of natural plant starches and bio-polymers that bind the grounds into a durable, stone-like material that is 100% biodegradable.

        **The Impact**
        Today, Coffee Cycle Studio has diverted over 5 tons of coffee waste from landfills. Each product you buy prevents hundreds of grams of potential methane emissions. We are not just making decor; we are reimagining the lifecycle of our daily habits.`
      },
      {
        id: '4',
        title: 'Workshop Spotlight: Coffee Ground Candles',
        excerpt: 'Join our latest crafting session where we transform spent grounds into aromatic, eco-friendly candles for your home.',
        date: 'Jan 10, 2024',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
        content: `Making candles from coffee grounds is not just about recycling; it's about creating an atmosphere. The natural oils in coffee combined with soy wax create a warm, comforting scent that requires no artificial fragrances.

        **Why Coffee Candles?**
        1. **Natural Scent**: The aroma of roasted coffee is known to cleanse the palate and sharpen the mind.
        2. **Aesthetic Appeal**: The layers of dark grounds against creamy wax create a beautiful, rustic look.
        3. **Eco-Friendly**: We use 100% soy wax and reclaimed grounds, making these candles strictly vegan and biodegradable.

        **Join Our Next Workshop**
        We hold monthly workshops at our studio where you can bring your own jar and learn the art of candle pouring. It's a perfect weekend activity for families and couples looking to disconnect and make something with their hands.`
      }
    ],
    ui: {
      hero: {
        subtitle: 'From Grounds to Art',
        title: 'Relive \n A New Life',
        description: 'We transform discarded coffee grounds into sustainable design pieces, cherishing their imperfections and life cycle stories.',
        cta_collection: 'View Collection',
        cta_story: 'Our Story'
      },
      about: {
        quote: '"There are things in life discarded not because they are worthless, but because no one saw their value in time."',
        philosophy: 'Our Philosophy',
        title: 'COFFEEFORM – From Cup to Corner',
        story: [
          'Every day, after bringing joy in morning coffees, kilograms of coffee grounds quietly end their journey in the trash — unremembered, unkept.',
          'COFFEEFORM started from the moment five female students stood in front of those bags of coffee grounds and wondered: "Why must the memory of coffee end here?"',
          'No capital. No business experience. No factory.',
          'We only had clumsy hands and a very simple belief: everything deserves a second chance.',
          'We went to each coffee shop to collect discarded grounds. Washing, drying, grinding, and mixing each batch by hand. We poured every mold, sanded every edge, accepting even the cracks — for they are traces of a saved journey, not defects.',
          'From seemingly useless things, pen pots, jewelry trays, and small planters gradually came to life. Each product bears the natural brown color of coffee, no surface alike, holding within a past once forgotten.',
          'COFFEEFORM does not merely create products. We keep the memory of coffee and give it a new life in your living space.',
          'When you hold a COFFEEFORM product, it is not just a decor item. It is a piece of coffee once abandoned — kept by you, given life by you once more.',
          'COFFEEFORM does not want to change the world. We just want to change how you look at small things — from a morning coffee to a small corner in your life.'
        ],
        feature1_title: '100% Natural',
        feature1_desc: 'Fully biodegradable, plastic-free.',
        feature2_title: 'Handcrafted',
        feature2_desc: 'Crafted one by one by artisans.'
      },
      team: {
        subtitle: 'The Creators',
        title: 'Meet the Team',
        desc: 'The passionate individuals behind every handcrafted recycled product.'
      },
      products: {
        title: 'Curated Collection',
        desc: 'Each piece is unique, showcasing the organic variation of coffee grounds.',
        view_all: 'View All Products',
        buy_now: 'Buy Now'
      },
      blog: {
        title: 'Coffee & Recycling Corner',
        desc: 'Discover stories, tips, and green living inspiration from used coffee grounds.',
        read_more: 'Read More'
      },
      contact: {
        subtitle: 'Contact',
        title: 'Join Us',
        desc: 'Have questions, partnership ideas, or want to join our grounds collection program? Contact us today.',
        visit: 'Visit Studio',
        phone: 'Phone',
        form_title: 'Send Message',
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        address: 'No. 600, Nguyen Van Cu Street (Extended), An Binh Ward, Can Tho City'
      },
      footer: {
        rights: '© 2024 Coffee Form. All rights reserved.',
        brand_desc: 'Transforming coffee waste into sustainable art pieces since 2024.',
        quick_links: 'Quick Links',
        resources: {
          title: 'Resources',
          story: 'Our Story',
          sustainability: 'Sustainability',
          blog: 'Blog',
          faqs: 'FAQs'
        },
        newsletter: {
          title: 'Stay Updated',
          desc: 'Subscribe to our newsletter for eco-tips and updates.',
          placeholder: 'Your email'
        },
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      product_detail: {
        not_found: 'Product Not Found',
        back_home: 'Return Home',
        back_collection: 'Back to Collection',
        reviews: 'reviews',
        warranty: '2 Year Warranty',
        shipping: 'Free Shipping',
        order_now: 'Order Now',
        quantity: 'Quantity',
        add_to_cart: 'Add to Cart'
      },
      order_page: {
        back_product: 'Back to Product',
        form_title: 'Order Details',
        success_title: 'Thank you for your order!',
        success_desc: 'We will contact you shortly to confirm details.',
        place_another: 'Place another order',
        confirm_order: 'Confirm Order',
        fields: {
          name: 'Full Name',
          name_placeholder: 'John Doe',
          email: 'Email',
          phone: 'Phone Number',
          address: 'Shipping Address',
          address_placeholder: '123 Coffee Street...'
        }
      },
      all_products: {
          title: 'Our Collection',
          subtitle: 'Sustainable designs for your sustainable life',
          filter_all: 'All',
          filter_new: 'New Arrival',
          filter_best: 'Best Seller',
          load_more: 'Load More'
        }
    }
  },
  vn: {
    nav: {
      home: 'Trang Chủ',
      about: 'Về Chúng Tôi',
      team: 'Đội Ngũ',
      products: 'Sản Phẩm',
      blog: 'Blog',
      contact: 'Liên Hệ'
    },
    products: [
      {
        id: '1',
        name: 'Khay The Last Drop',
        description: 'Một tác phẩm điêu khắc phục vụ được chế tác từ bã cà phê nén.',
        price: '1.600.000₫',
        image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800',
        tag: 'Bán chạy nhất'
      },
      {
        id: '2',
        name: 'Chậu Cây Mini Eco',
        description: 'Kết cấu hữu cơ cho các loại cây mọng nước yêu thích của bạn, có khả năng hút ẩm tự nhiên.',
        price: '800.000₫',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800',
        tag: '100% Tái chế'
      },
      {
        id: '3',
        name: 'Hộp Đựng Bút First Sip',
        description: 'Tổ chức bàn làm việc tối giản với hương thơm thoang thoảng của hạt cà phê rang.',
        price: '700.000₫',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        tag: 'Bền vững'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Văn Quế Hương',
        role: 'GIÁM ĐỐC ĐIỀU HÀNH',
        image: 'images/team/QueHuong.jpg',
        bio: 'Phụ trách điều hành và tổ chức hoạt động chung của dự án. Hỗ trợ các thành viên trong nhóm, theo dõi tiến độ công việc và đảm bảo các nhiệm vụ được thực hiện đúng kế hoạch đã đề ra.'
      },
      {
        id: '2',
        name: 'Trần Thị Tuyết Mai',
        role: 'GIÁM ĐỐC SẢN PHẨM',
        image: 'images/team/TuyetMai.jpg',
        bio: 'Phụ trách xây dựng và hoàn thiện sản phẩm của dự án. Tham gia theo dõi quá trình thực hiện, đánh giá và đề xuất điều chỉnh để sản phẩm phù hợp với nhu cầu sử dụng.'
      },
      {
        id: '3',
        name: 'Nguyễn Thị Phương Nghi',
        role: 'GIÁM ĐỐC TIẾP THỊ',
        image: 'images/team/PhuongNghi.jpg',
        bio: 'Phụ trách xây dựng và triển khai các hoạt động truyền thông cho dự án. Lên ý tưởng nội dung, quản lý các kênh truyền thông và hỗ trợ quảng bá hình ảnh thương hiệu.'
      },
      {
        id: '4',
        name: 'Trần Thị Mỹ Hiền',
        role: 'GIÁM ĐỐC KINH DOANH',
        image: 'images/team/MyHien.jpg',
        bio: 'Phụ trách nghiên cứu thị trường và hỗ trợ kết nối khách hàng, theo dõi hiệu quả hoạt động kinh doanh và đề xuất giải pháp cải thiện phù hợp với mục tiêu của nhóm.'
      },
      {
        id: '5',
        name: 'Lương Thị Tố Tố',
        role: 'GIÁM ĐỐC TÀI CHÍNH',
        image: 'images/team/ToTo.jpg',
        bio: 'Phụ trách quản lý ngân sách, theo dõi chi phí và hỗ trợ lập kế hoạch tài chính cho dự án. Đảm bảo các khoản thu chi được kiểm soát và sử dụng hợp lý.'
      }
    ],
    blog: [
      {
        id: '1',
        title: '5 Cách Tái Chế Bã Cà Phê Hiệu Quả Tại Nhà',
        excerpt: 'Đừng vội vứt bỏ bã cà phê! Khám phá những cách đơn giản nhưng bất ngờ để biến chúng thành phân bón, mỹ phẩm và vật dụng hữu ích.',
        date: '24 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        content: `Bã cà phê là một nguồn tài nguyên quý giá thường bị lãng phí. Trung bình mỗi người uống cà phê thải ra một lượng lớn bã mỗi năm. Thay vì ném vào thùng rác, đây là 5 cách chi tiết để bạn tận dụng chúng:

        1. **Phân Bón Giàu Dinh Dưỡng**:
        Bã cà phê rất giàu nitơ, kali và phốt pho - bộ ba nguyên tố thiết yếu cho cây trồng. Đặc biệt, chúng có tính axit nhẹ, cực kỳ thích hợp cho hoa hồng, đỗ quyên hay cẩm tú cầu. Bạn chỉ cần rắc một lớp mỏng quanh gốc cây hoặc trộn vào đất trước khi trồng.

        2. **Tẩy Tế Bào Chết Tự Nhiên**:
        Kết cấu hạt mịn của bã cà phê là chất tẩy da chết vật lý tuyệt vời. 
        *Công thức*: Trộn 1/2 chén bã cà phê với 1/4 chén dầu dừa và 1 muỗng đường nâu. Massage nhẹ nhàng lên da ẩm để loại bỏ lớp sừng già cỗi, giúp da sáng mịn và kích thích tuần hoàn máu.

        3. **Khử Mùi Tủ Lạnh Hiệu Quả**:
        Nitơ trong cà phê có khả năng hấp thụ và trung hòa mùi hôi cực tốt. Hãy phơi khô bã cà phê hoàn toàn (để tránh nấm mốc), sau đó cho vào một chiếc bát nhỏ hoặc túi vải. Đặt trong tủ lạnh, tủ giày hoặc túi tập gym để đánh bay mùi khó chịu.

        4. **Chất Tẩy Rửa Đa Năng**:
        Nhờ độ nhám tự nhiên, bã cà phê giúp đánh bay các vết bám cứng đầu trên xoong nồi mà không cần hóa chất mạnh. Rắc bã lên miếng cọ rửa và chà sạch vết thức ăn cháy xém. (Lưu ý: Rửa sạch và tránh dùng trên các bề mặt xốp dễ bám màu).

        5. **Đuổi Côn Trùng**:
        Ốc sên và kiến rất ghét kết cấu và mùi của cà phê. Rải một vòng tròn bã cà phê quanh gốc cây non để tạo "hàng rào bảo vệ" tự nhiên. Cách này vừa an toàn cho vật nuôi lại vừa tốt cho đất.`
      },
      {
        id: '2',
        title: 'Làm Đẹp Từ Bã Cà Phê: Hướng Dẫn Chi Tiết',
        excerpt: 'Bí quyết dưỡng da tự nhiên từ bã cà phê giúp tẩy tế bào chết, làm sáng da, giảm bọng mắt và cải thiện làn da của bạn.',
        date: '20 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1515516947640-8cde5397ba0c?auto=format&fit=crop&q=80&w=800',
        content: `Cafe sáng của bạn có thể trở thành liệu trình spa buổi tối. Caffeine là một thành phần "ngôi sao" trong nhiều sản phẩm dưỡng da cao cấp nhờ khả năng chống oxy hóa và làm co mạch máu.

        **Lợi Ích Của Cà Phê Với Da:**
        *   **Tẩy Da Chết**: Giúp da mịn màng, đều màu.
        *   **Giảm Bọng Mắt**: Caffeine làm co các mạch máu dưới da, giúp giảm sưng và quần thâm mắt nhanh chóng.
        *   **Chống Lão Hóa**: Chứa chất chống oxy hóa mạnh, ngăn ngừa tác hại của gốc tự do.

        **Công Thức DIY Nên Thử:**

        **1. Mặt Nạ "Bừng Tỉnh"**
        Trộn bã cà phê nhuyễn với sữa chua (không đường). Axit lactic trong sữa chua giúp làm mềm da trong khi cà phê kích thích da. Đắp 10 phút rồi rửa sạch với nước ấm.

        **2. Tẩy Tế Bào Chết Da Đầu**
        Bã nhờn và sản phẩm tạo kiểu tóc thường tích tụ trên da đầu. Trước khi gội, hãy massage một nắm bã cà phê ướt vào da đầu. Nó giúp làm sạch sâu và kích thích nang tóc phát triển.

        **3. Hỗ Trợ Giảm Mỡ Sần (Cellulite)**
        Mặc dù không thể chữa khỏi hoàn toàn, caffeine giúp làm săn chắc da tạm thời. Trộn bã cà phê với dầu ô liu ấm và massage mạnh vùng da cần cải tạo trong 5 phút trước khi tắm.

        *Lưu ý*: Luôn thử sản phẩm trên một vùng da nhỏ trước khi dùng toàn mặt, đặc biệt nếu bạn có da nhạy cảm.`
      },
      {
        id: '3',
        title: 'Hành Trình Của Chúng Tôi: Từ Rác Thải Đến Nghệ Thuật',
        excerpt: 'Tại sao chúng tôi chọn bã cà phê? Câu chuyện về sứ mệnh giảm thiểu rác thải bãi chôn lấp và tái sinh vật liệu.',
        date: '15 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1525648199074-ce30b561a115?auto=format&fit=crop&q=80&w=800',
        content: `Tất cả bắt đầu từ một quán cà phê góc phố quen thuộc. Chúng tôi quan sát người pha chế gõ tay cầm máy pha, đổ bỏ khối bã cà phê nén vào thùng rác. Lặp đi lặp lại. Đến cuối giờ, thùng rác đã đầy ắp.

        **Vấn Đề**
        Bã cà phê là chất hữu cơ, nhưng khi bị chôn lấp trong môi trường yếm khí tại bãi rác, chúng phân hủy và sinh ra khí methane - một loại khí nhà kính mạnh gấp 80 lần CO2 trong ngắn hạn.

        **Khoảnh Khắc "Eureka"**
        Chúng tôi nhận ra "thứ bỏ đi" này thực chất là một vật liệu tuyệt vời. Màu nâu trầm ấm áp, kết cấu hạt mịn màng và hương thơm dễ chịu. Nhưng làm sao để định hình chúng?

        **Quá Trình Thử Nghiệm**
        Đội ngũ đã dành 6 tháng ròng rã trong xưởng nhỏ. Chúng tôi thử nhựa (quá độc hại), keo hồ (quá yếu) và xi măng (quá nặng). Cuối cùng, chúng tôi tìm ra công thức độc quyền kết hợp tinh bột thực vật tự nhiên, giúp kết dính bã cà phê thành một vật liệu cứng như đá nhưng phân hủy sinh học 100%.

        **Tác Động**
        Đến nay, Coffee Cycle Studio đã vinh dự chuyển hướng hơn 5 tấn bã cà phê khỏi các bãi chôn lấp. Mỗi sản phẩm bạn cầm trên tay không chỉ là một món đồ trang trí, mà là một lời cam kết về tương lai bền vững của chúng ta.`
      },
      {
        id: '4',
        title: 'Tiêu điểm Workshop: Nến Thơm Từ Bã Cà Phê',
        excerpt: 'Tham gia buổi thủ công mới nhất của chúng tôi, nơi chúng ta biến bã cà phê thành những lọ nến thơm sinh thái cho ngôi nhà của bạn.',
        date: '10 Tháng 1, 2024',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
        content: `Làm nến từ bã cà phê không chỉ là tái chế; đó là việc kiến tạo một bầu không khí. Tinh dầu tự nhiên trong cà phê kết hợp với sáp đậu nành tạo nên một hương thơm ấm áp, dễ chịu mà không cần bất kỳ hương liệu nhân tạo nào.

        **Tại Sao Là Nến Cà Phê?**
        1. **Hương Thơm Tự Nhiên**: Mùi hương của cà phê rang được biết đến với khả năng làm sạch khứu giác và giúp tinh thần tỉnh táo.
        2. **Vẻ Đẹp Mộc Mạc**: Những lớp bã cà phê sẫm màu xen kẽ với sáp trắng kem tạo nên một vẻ đẹp mộc mạc, đầy nghệ thuật.
        3. **Thân Thiện Môi Trường**: Chúng tôi sử dụng 100% sáp đậu nành và bã cà phê thu gom, làm cho những cây nến này hoàn toàn thuần chay và tự phân hủy.

        **Đăng Ký Workshop**
        Chúng tôi tổ chức các buổi workshop hàng tháng tại studio. Hãy mang theo chiếc lọ thủy tinh cũ của bạn và học nghệ thuật đổ nến. Đây là hoạt động cuối tuần hoàn hảo cho gia đình và các cặp đôi muốn "sống chậm" và tự tay làm ra những món đồ ý nghĩa.`
      }
    ],
    ui: {
      hero: {
        subtitle: 'Hành trình từ tách cà phê đến tác phẩm nghệ thuật',
        title: 'Sống Lại \n Cuộc Đời Mới',
        description: 'Chúng tôi biến bã cà phê bỏ đi thành những món đồ thiết kế bền vững, trân trọng sự không hoàn hảo và câu chuyện vòng đời của chúng.',
        cta_collection: 'Xem Bộ Sưu Tập',
        cta_story: 'Câu Chuyện Của Chúng Tôi'
      },
      about: {
        quote: '"Có những thứ trong cuộc sống bị bỏ đi không phải vì chúng vô giá trị, mà vì không ai kịp nhìn thấy giá trị của chúng."',
        philosophy: 'Triết Lý Của Chúng Tôi',
        title: 'COFFEEFORM – From Cup to Corner',
        story: [
          'Mỗi ngày, sau khi mang lại niềm vui trong những ly cà phê buổi sáng, hàng ký bã cà phê lặng lẽ kết thúc hành trình của mình trong thùng rác — không được nhớ đến, không được giữ lại.',
          'COFFEEFORM bắt đầu từ khoảnh khắc năm cô gái sinh viên đứng trước những túi bã cà phê ấy và tự hỏi: "Tại sao ký ức của cà phê lại phải kết thúc ở đây?"',
          'Không vốn. Không kinh nghiệm kinh doanh. Không nhà xưởng.',
          'Chúng tôi chỉ có những đôi tay còn vụng về và một niềm tin rất giản dị: mọi thứ đều xứng đáng có một cơ hội thứ hai.',
          'Chúng tôi đi từng quán cà phê để xin lại những túi bã bị bỏ đi. Rửa sạch, sấy khô, nghiền mịn và trộn từng mẻ vật liệu bằng tay. Chúng tôi đổ từng khuôn, mài từng cạnh, chấp nhận cả những vết nứt — bởi đó là dấu vết của một hành trình được cứu sống, không phải là khuyết điểm.',
          'Từ những thứ tưởng chừng vô dụng ấy, những chiếc chậu bút, khay trang sức, chậu hoa nhỏ dần ra đời. Mỗi sản phẩm mang màu nâu tự nhiên của cà phê, bề mặt không cái nào giống cái nào, và trong mình một quá khứ đã từng bị lãng quên.',
          'COFFEEFORM không đơn thuần tạo ra sản phẩm. Chúng tôi giữ lại ký ức của cà phê và trao cho nó một cuộc đời mới trong không gian sống của bạn.',
          'Khi bạn cầm trên tay một sản phẩm COFFEEFORM, đó không chỉ là một món đồ decor. Đó là một phần cà phê từng bị bỏ rơi — được bạn giữ lại, được bạn cho sống thêm một lần nữa.',
          'COFFEEFORM không muốn thay đổi thế giới. Chúng tôi chỉ muốn thay đổi cách bạn nhìn vào những điều nhỏ bé — từ một ly cà phê buổi sáng, đến một góc nhỏ trong đời bạn.'
        ],
        feature1_title: '100% Tự Nhiên',
        feature1_desc: 'Phân hủy hoàn toàn, không nhựa.',
        feature2_title: 'Thủ Công',
        feature2_desc: 'Chế tác từng cái một bởi nghệ nhân.'
      },
      team: {
        subtitle: 'Những Người Kiến Tạo',
        title: 'Gặp Gỡ Đội Ngũ',
        desc: 'Những con người đam mê đằng sau mỗi sản phẩm tái chế thủ công của chúng tôi.'
      },
      products: {
        title: 'Bộ Sưu Tập Tinh Tế',
        desc: 'Mỗi sản phẩm là độc nhất, mang đậm dấu ấn hữu cơ tự nhiên của bã cà phê.',
        view_all: 'Xem Tất Cả Sản Phẩm',
        buy_now: 'Mua Ngay'
      },
      blog: {
        title: 'Góc Cà Phê & Tái Chế',
        desc: 'Khám phá những câu chuyện, mẹo vặt và cảm hứng sống xanh từ bã cà phê đã qua sử dụng.',
        read_more: 'Đọc Thêm'
      },
      contact: {
        subtitle: 'Liên Hệ',
        title: 'Tham Gia Cùng Chúng Tôi',
        desc: 'Bạn có câu hỏi, ý tưởng hợp tác hay muốn tham gia chương trình thu gom bã cà phê? Hãy liên hệ với chúng tôi ngay hôm nay.',
        visit: 'Ghé Thăm Studio',
        phone: 'Điện Thoại',
        form_title: 'Gửi Tin Nhắn',
        name: 'Họ Tên',
        email: 'Email',
        message: 'Tin Nhắn',
        submit: 'Gửi Tin Nhắn',
        address: 'Số 600, đường Nguyễn Văn Cừ (nối dài), Phường An Bình, Thành phố Cần Thơ'
      },
      footer: {
        rights: '© 2024 Coffee Form. Đã đăng ký bản quyền.',
        brand_desc: 'Biến bã cà phê thành tác phẩm nghệ thuật bền vững từ năm 2024.',
        quick_links: 'Liên Kết Nhanh',
        resources: {
          title: 'Tài Nguyên',
          story: 'Câu Chuyện',
          sustainability: 'Bền Vững',
          blog: 'Blog',
          faqs: 'Hỏi Đáp'
        },
        newsletter: {
          title: 'Nhận Thông Tin',
          desc: 'Đăng ký để nhận mẹo sống xanh và cập nhật mới nhất.',
          placeholder: 'Email của bạn'
        },
        privacy: 'Chính Sách Bảo Mật',
        terms: 'Điều Khoản Dịch Vụ'
      },
      product_detail: {
        not_found: 'Không tìm thấy sản phẩm',
        back_home: 'Quay lại Trang Chủ',
        back_collection: 'Quay lại Bộ Sưu Tập',
        reviews: 'đánh giá',
        warranty: 'Bảo Hành 2 Năm',
        shipping: 'Miễn Phí Vận Chuyển',
        order_now: 'Đặt Hàng Ngay',
        quantity: 'Số lượng',
        add_to_cart: 'Thêm vào giỏ'
      },
      order_page: {
        back_product: 'Quay lại Sản Phẩm',
        form_title: 'Thông Tin Đặt Hàng',
        success_title: 'Cảm ơn bạn đã đặt hàng!',
        success_desc: 'Chúng tôi sẽ liên hệ sớm để xác nhận chi tiết.',
        place_another: 'Đặt hàng khác',
        confirm_order: 'Xác Nhận Đặt Hàng',
        fields: {
          name: 'Họ và Tên',
          name_placeholder: 'Nguyễn Văn A',
          email: 'Email',
          phone: 'Số Điện Thoại',
          address: 'Địa Chỉ Nhận Hàng',
          address_placeholder: 'Số nhà, Tên đường...'
        }
      },
      all_products: {
          title: 'Bộ Sưu Tập',
          subtitle: 'Thiết kế bền vững cho cuộc sống xanh',
          filter_all: 'Tất Cả',
          filter_new: 'Mới Nhất',
          filter_best: 'Bán Chạy',
          load_more: 'Xem Thêm'
        }
    }
  }
};

// Helper for type safety if needed, but for now strict typing isn't strictly required
// as long as we use DATA[language].key convention.
