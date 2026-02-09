#!/usr/bin/env python3
"""
Monitor website status and performance
"""

import requests
import json
import sys
from datetime import datetime

def check_site(url="https://web-projects-486505.web.app"):
    """Check if site is up and measure response time"""
    try:
        start_time = datetime.now()
        response = requests.get(url, timeout=10)
        end_time = datetime.now()
        
        response_time = (end_time - start_time).total_seconds() * 1000
        
        result = {
            "url": url,
            "timestamp": datetime.now().isoformat(),
            "status_code": response.status_code,
            "response_time_ms": round(response_time, 2),
            "content_length": len(response.content),
            "up": response.status_code == 200
        }
        
        return result
    except Exception as e:
        return {
            "url": url,
            "timestamp": datetime.now().isoformat(),
            "error": str(e),
            "up": False
        }

if __name__ == "__main__":
    # Check the default site
    result = check_site()
    
    # Print as JSON
    print(json.dumps(result, indent=2))
    
    # Exit with error code if site is down
    sys.exit(0 if result.get("up", False) else 1)
