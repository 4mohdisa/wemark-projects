import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ProjectsPageContent from '@/components/projects-page-content';

export const metadata: Metadata = siteMetadata['/projects'];

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}