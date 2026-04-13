import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// 获取单篇文章
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('articles')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw new Error(`查询失败: ${error.message}`);
    
    if (!data) {
      return NextResponse.json({
        success: false,
        error: '文章不存在'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}

// 更新文章
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = getSupabaseClient();
    const body = await request.json();
    
    const { data, error } = await client
      .from('articles')
      .update({
        title: body.title,
        summary: body.summary,
        content: body.content,
        publish_time: body.publish_time,
        tags: body.tags,
        source: body.source,
        source_link: body.source_link,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw new Error(`更新失败: ${error.message}`);
    
    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}

// 删除文章
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = getSupabaseClient();
    const { error } = await client
      .from('articles')
      .delete()
      .eq('id', id);
    
    if (error) throw new Error(`删除失败: ${error.message}`);
    
    return NextResponse.json({
      success: true
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}
