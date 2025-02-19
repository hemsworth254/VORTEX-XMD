const axios = require('axios');
const { cmd, commands } = require("../command");

cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const repoName = args.join(" "); // Combine arguments to form "owner/repo"
    if (!repoName) {
      return reply("Please provide a GitHub repository name in the format 📌`owner/repo`.");
    }

    // Construct GitHub API URL for the repository
    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const response = await axios.get(apiUrl); // Fetch repository data from GitHub
    const repoData = response.data;

    // Prepare repository information message
    let repoInfo = "📁_*GITHUB REPO INFO BY VORTEX-XMD*_📁\n\n";
    repoInfo += `📌 *Name*: ${repoData.name}\n`;
    repoInfo += `🔗 *URL*: ${repoData.html_url}\n`;
    repoInfo += `📝 *Description*: ${repoData.description || "No description provided"}\n`;
    repoInfo += `⭐ *Stars*: ${repoData.stargazers_count}\n`;
    repoInfo += `🍴 *Forks*: ${repoData.forks_count}\n\n`;
    repoInfo += "> *© Powered By Vᴏʀᴛᴇx xᴍᴅ*\n";

    // Send repository info as a message
    await conn.sendMessage(from, { text: repoInfo }, { quoted });

  } catch (error) {
    console.error("Error fetching repository data:", error);
    reply(`Error fetching repository data 🤕: ${error.message}`);
  }
});

cmd({
    pattern: "repo2",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "💫",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Mrhanstz/VORTEX-XMD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*> Hello There GMAX W.A BOT User! 👋😊* 

> Don't forget to star & fork the repo🌟🍴

https://github.com/Mrhanstz/VORTEX-XMD
──────────────────
${readMore}
\`BOT NAME:\`💫
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`VORTEX-USERS:\` 👥
> ${userCount}

──────────────────
\n> *© Made by HansTz* `;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/lvvpzw.jpeg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395768630577@newsletter',
                    newsletterName: 'Vortex-Xmd',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/devhanstz/VORTEX-XMD-DATA/raw/refs/heads/main/KingHans/HansTz.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395768630577@newsletter',
                    newsletterName: 'Vortex-Xmd',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});

