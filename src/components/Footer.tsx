
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center px-4">
          <p className="text-lg mb-4">&copy; 2025 Adventure Rapids Rafting Co. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
          <div className="text-gray-400">
              <p>Email: info@nrs.com</p>
              <p>Phone: +1 (800) </p>
              <p>Address: Nepal</p>
          </div>
          <div className="mt-6">
              <p className="text-gray-300">Follow Us:</p>
              <div className="flex justify-center space-x-4 mt-2 text-2xl">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                      {/* Placeholder for Facebook Icon */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                      {/* Placeholder for Twitter Icon */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.162 5.656a8.384 8.384 0 01-2.357.646 4.187 4.187 0 001.825-2.27 8.397 8.397 0 01-2.676 1.015 4.18 4.18 0 00-7.126 3.814 11.882 11.882 0 01-8.62-4.376 4.172 4.172 0 001.29 5.57 4.197 4.197 0 01-1.897-.527v.052a4.185 4.185 0 003.356 4.108 4.207 4.207 0 01-1.883.072 4.195 4.195 0 003.922 2.916 8.406 8.406 0 01-5.232 1.801 11.92 11.92 0 006.417 1.88c7.693 0 11.9-6.36 11.9-11.9s-.27-2.302-.68-3.26z" /></svg>
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                      {/* Placeholder for Instagram Icon */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 10.707a.75.75 0 00-1.06 0L12 13.879l-2.646-2.646a.75.75 0 00-1.06 1.06L10.939 15l-3.536 3.536a.75.75 0 001.06 1.06L12 16.121l2.646 2.646a.75.75 0 001.06-1.06L13.061 15l3.536-3.536a.75.75 0 000-1.06z" clipRule="evenodd" /></svg>
                  </a>
              </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
