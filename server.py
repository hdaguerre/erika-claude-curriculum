"""
Erika's Curriculum Server
Starts a local HTTP server at port 8080 and opens the browser automatically.
Run from any directory — it always serves from its own folder.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
URL = f"http://localhost:{PORT}"

# Change to the directory where this script lives so relative paths work
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

Handler = http.server.SimpleHTTPRequestHandler

# Suppress the default request log noise (optional — comment out to see requests)
class QuietHandler(Handler):
    def log_message(self, format, *args):
        pass  # Uncomment below to see requests instead:
        # print(f"  → {args[0]}")

print("")
print("  ✓ Your curriculum is running at http://localhost:8080")
print("  Press Ctrl+C to stop.")
print("")

# Open the browser (works on Windows, Mac, Linux)
webbrowser.open(URL)

try:
    with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n  Server stopped. See you next time!")
    sys.exit(0)
except OSError as e:
    if "Address already in use" in str(e) or "10048" in str(e):
        print(f"\n  Port {PORT} is already in use.")
        print(f"  The server may already be running — open {URL} in your browser.")
        print("  Or close the other process and try again.")
    else:
        raise
