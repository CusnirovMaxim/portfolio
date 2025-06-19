import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCards';

describe('ProjectCard', () => {
  const mockProject = {
    title: 'Test Project',
    description: 'Test Description',
    imgPath: '/test-image.jpg',
    isBlog: false,
    ghLink: 'https://github.com/test',
    demoLink: 'https://demo.test'
  };

  it('renders project information correctly', () => {
    const { getByText, getByAltText } = render(
      <ProjectCard {...mockProject} />
    );

    expect(getByText(mockProject.title)).toBeInTheDocument();
    expect(getByText(mockProject.description)).toBeInTheDocument();
    expect(getByAltText('card-img')).toHaveAttribute('src', mockProject.imgPath);
  });

  it('renders GitHub link correctly', () => {
    const { getByRole } = render(
      <ProjectCard {...mockProject} />
    );

    const githubLink = getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', mockProject.ghLink);
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders demo link when provided', () => {
    const { getByRole } = render(
      <ProjectCard {...mockProject} />
    );

    const demoLink = getByRole('link', { name: /демо/i });
    expect(demoLink).toHaveAttribute('href', mockProject.demoLink);
    expect(demoLink).toHaveAttribute('target', '_blank');
  });

  it('does not render demo link for blog posts', () => {
    const blogProject = {
      ...mockProject,
      isBlog: true
    };

    const { queryByRole } = render(
      <ProjectCard {...blogProject} />
    );

    const demoLink = queryByRole('link', { name: /демо/i });
    expect(demoLink).not.toBeInTheDocument();
  });

  it('handles missing demo link', () => {
    const projectWithoutDemo = {
      ...mockProject,
      demoLink: undefined
    };

    const { queryByRole } = render(
      <ProjectCard {...projectWithoutDemo} />
    );

    const demoLink = queryByRole('link', { name: /демо/i });
    expect(demoLink).not.toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    const { container, getAllByRole } = render(
      <ProjectCard {...mockProject} />
    );

    const links = getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });

    const card = container.firstChild;
    expect(card).toHaveClass('project-card-view');
  });
}); 