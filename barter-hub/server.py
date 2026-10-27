"""
TradeVerse Local Development Server
Launches a simple HTTP server and opens the browser automatically.
"""
import http.server
import socketserver
import webbrowser
import os
import sys

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

def main():
    os.chdir(DIRECTORY)
    url = f"http://localhost:{PORT}"
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("=" * 65)
            print(">> TradeVerse Barter Hub is running!")
            print(f">> Local URL: {url}")
            print(f">> Serving directory: {DIRECTORY}")
            print("=" * 65)
            print("Press Ctrl+C to stop the server.\n")
            
            try:
                webbrowser.open(url)
            except Exception:
                pass
                
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048 or "Address already in use" in str(e):
            print(f"Port {PORT} is in use. Trying port 8080...")
            try:
                with socketserver.TCPServer(("", 8080), Handler) as httpd:
                    print(">> TradeVerse running on http://localhost:8080")
                    webbrowser.open("http://localhost:8080")
                    httpd.serve_forever()
            except Exception as e2:
                print(f"Could not bind to port 8080: {e2}")
        else:
            print(f"Server error: {e}")

if __name__ == "__main__":
    main()
