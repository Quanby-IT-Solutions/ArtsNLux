const FooterMenuItems = () => {
    // Define menu items correctly
    const menuItems = [
        {
            title: 'Spaces',
            links: ['Manila Fair', 'Design Commune', 'Market Days', 'Catalogue'],
        },
        {
            title: 'Company',
            links: ['About Us', 'Services', 'B2B'],
        },
        {
            title: 'Support',
            links: ['Contact Us', "FAQ's", 'Privacy Policy', 'Terms of Use'],
        },
    ];

    return (
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-12 mt-8 md:mt-0">
            {menuItems.map((item, index) => (
                <div key={index}>
                    <h3 className="text-sm font-semibold tracking-wider dark:text-[#AEC1CC] text-gray-500 uppercase mb-4">
                        {item.title}
                    </h3>
                    <ul className="space-y-2">
                        {item.links.map((link, idx) => (
                            <li key={idx}>
                                {/* Replace '#' with actual links */}
                                <a href="#" className="text-black hover:text-gray-600">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterMenuItems;
