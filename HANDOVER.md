# Project Handover: Gopi Rayini Portfolio & NAS Dashboard

## 1. Project Environment
*   **Root Directory:** /mnt/nas/docker/nas-website (Typically a CIFS/SMB mount from 192.168.1.215).
*   **Tech Stack:** React 19, Vite, TypeScript, Vanilla CSS.
*   **Deployment:** Docker Compose (Node 22 build -> Nginx stable-alpine).

## 2. Infrastructure Discovery
If managing from a new machine, verify the following:
*   **Find the Mount:** Run "mount | grep -i docker". Ensure the project files are visible at the path.
*   **Verify Docker:** Run "docker compose version". Ensure the Docker daemon is active.
*   **Service Check:** Run "sudo docker ps" to see if containers are already running on the current host.

## 3. Security Protocols (MANDATORY)
To prevent the leakage of sensitive data (Cloudflare tokens, NAS credentials) to GitHub:
*   **Credentials:** All secrets MUST live in the local .env file (which is in .gitignore).
    *   CLOUDFLARE_TUNNEL_TOKEN: Used in docker-compose.yaml.
    *   VITE_NAS_USER / VITE_NAS_PASS: Used in Login.tsx.
*   **Reference in Code:** Use \${CLOUDFLARE_TUNNEL_TOKEN} in Compose and import.meta.env.VITE_NAS_USER in React.
*   **Verification:** ALWAYS run "grep -r eyJh ." (or other known secret prefixes) before committing.
*   **Accidental Leak?** If a secret is committed, you MUST perform an orphan-branch squash and force-push to purge the history. Standard reverts are NOT enough.

## 4. Version Control & Publishing
1.  **Stage Changes:** "git add ." (Verify .env is NOT listed).
2.  **Commit:** "git commit -m \"Brief description of changes\"".
3.  **Push:** "git push origin main".

## 5. Maintenance Commands
\`\`\`bash
# 1. Navigate to the project root
cd /path/to/mount/nas-website

# 2. Clean build and redeploy (Applies .env and Nginx config)
sudo docker compose build --no-cache && sudo docker compose up -d

# 3. View logs
sudo docker compose logs -f nas-website
\`\`\`

## 6. Runbook: Website Down?
1.  **Locate Project:** Verify you are in the directory containing docker-compose.yaml.
2.  **Verify Environment:** 
    *   If docker is missing: Install it (sudo apt install docker.io).
    *   If files are missing: Remount the NAS (sudo mount -a).
3.  **Port Conflict:** Ensure port 8080 isn't being used by another service.
4.  **Redeploy:** Execute the "Clean build and redeploy" commands above.

## 7. Key Features
*   **SPA Support:** nginx.conf and Dockerfile handle client-side routing and security headers.
*   **Non-Root Docker:** The Dockerfile is hardened to run as a non-privileged nginx user.
*   **Animations:** The landing page features a BackgroundAnimation.tsx canvas effect.
