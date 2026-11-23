import { ImageResponse } from 'next/og';

export const alt = 'Nikhil Khambhayta — Software Engineer specializing in Flutter and backend systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          color: '#f2f4f8',
          background: 'linear-gradient(135deg, #101215 0%, #1b2533 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ color: '#7aabff', fontSize: 24, letterSpacing: 5 }}>SOFTWARE ENGINEER</div>
        <div style={{ marginTop: 32, fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
          Nikhil Khambhayta
        </div>
        <div style={{ marginTop: 20, color: '#b7c1d0', fontSize: 34 }}>
          Flutter · Java · Spring Boot
        </div>
        <div style={{ marginTop: 12, color: '#b7c1d0', fontSize: 26 }}>
          Mobile applications. Scalable backends.
        </div>
        <div style={{ marginTop: 42, width: 130, height: 5, background: '#7aabff' }} />
      </div>
    ),
    size,
  );
}
