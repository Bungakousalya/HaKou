# AI Presentation Coach

A real-time AI-powered presentation coaching system that analyzes
speech delivery and body language using audio and video inputs,
providing live feedback and post-session insights.

## Features (Planned)
- Live speech feedback (pace, fillers, pauses)
- Live body language analysis (eye contact, posture)
- Real-time alerts (Good / Needs Improvement)
- Post-session performance dashboard

## Tech Stack
- Frontend: React + TypeScript + Tailwind
- Backend: FastAPI (Python)
- AI: MediaPipe, Whisper, Librosa
- Communication: WebSockets

## Team
- Frontend & UX
- Backend & AI



## flow

Start

  ↓
  
Open Application

  ↓
  
Select Language & Presentation Type

  ↓
  
Enable Camera & Microphone

  ↓
  
Start Practice Session

  ↓
  
Capture Audio (Mic)  ─────────┐
                               
                                ├─> Real-Time Processing

Capture Video (Camera) ───────┘ 

  ↓
  
Speech Analysis
(Pace, Fillers, Pauses)

  ↓
  
Body Language Analysis
(Eye Contact, Posture, Gestures)

  ↓
  
Combine Results

  ↓
  
Live Feedback Display
(Good / Needs Improvement)

  ↓
  
Session Ends

  ↓
  
Post-Session Analysis

  ↓
  
Performance Dashboard

  ↓
  
End
